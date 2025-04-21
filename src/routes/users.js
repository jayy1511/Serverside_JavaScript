const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");


const { hashPassword } = require("../middleware/passencrypt");

const { userLogIn, userSignUp } = require("../controllers/userControllers");

router.post("/login", userLogIn);


router.post("/signup", hashPassword, userSignUp);

router.post("/test", verifyToken, (req, res) => {
    res.send("You have access to this protected route!");
  });
  

module.exports = router;
