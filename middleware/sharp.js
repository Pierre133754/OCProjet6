const sharp = require("sharp");

module.exports = async (req, res, next) => {
    const path = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    await sharp(req.file.buffer).resize(5,5).toFile(path)
    next()
}