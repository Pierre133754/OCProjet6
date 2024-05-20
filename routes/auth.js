const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth");

router.post ("/signup", authCtrl.signIn);

module.exports = router;