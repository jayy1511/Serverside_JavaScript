const express = require("express");
const router = express.Router();

const { hashPassword } = require("../middleware/passencrypt");

const { userLogIn, userSignUp } = require("../controllers/userControllers");

router.post("/login", userLogIn);


router.post("/signup", hashPassword, userSignUp);

module.exports = router;
