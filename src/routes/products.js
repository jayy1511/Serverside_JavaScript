const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productControllers");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router.get("/", getAllProducts); // public
router.post("/", verifyToken, createProduct); // protected

module.exports = router;
