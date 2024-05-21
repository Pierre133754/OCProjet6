const multer = require("multer");
const sharp = require("sharp");

const express = require("express");
const router = express.Router();

const storage = multer.memoryStorage();

const filter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === 'image') {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed!"));
    }
};

const upload = multer({ 
    storage,
    fileFilter: filter
});

router.use("/", upload.single("image"), async (req, res, next) => {
    if (req.file) {
        const { buffer, originalname } = req.file;
        const name = originalname.split(" ").join("_");
        const newName = name+Date.now()+".webp"
        await sharp(buffer)
        .resize({
            width: 400,
            height: 600
        })
        .webp({ quality: 80 })
        .toFile("./images/"+newName)
        req.file = {
            filename: newName
        };
    }
    next();
})

module.exports = router;