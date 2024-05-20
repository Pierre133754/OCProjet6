const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const booksCtrl = require("../controllers/books");

router.get("/bestrating", booksCtrl.getTop3);
router.post("/", auth, multer, booksCtrl.postBook);
router.get("/", booksCtrl.getBooks);
router.get("/:id", booksCtrl.getBook);

module.exports = router;