const express = require("express");
const { getInvoices, createInvoice } = require("../controllers/invoiceControllers");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router.get("/", verifyToken, getInvoices); // protected
router.post("/", verifyToken, createInvoice); // protected

module.exports = router;
