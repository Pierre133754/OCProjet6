const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const booksCtrl = require("../controllers/books");

router.get("/bestrating", booksCtrl.getTop3);
router.post("/", auth, multer, booksCtrl.postBook);
router.get("/", booksCtrl.getBooks);
router.post("/:id/rating", auth, booksCtrl.rateBook);
router.get("/:id", booksCtrl.getBook);
router.put("/:id", auth, multer, booksCtrl.modifyBook);
router.delete("/:id", auth, booksCtrl.deleteBook);

module.exports = router;