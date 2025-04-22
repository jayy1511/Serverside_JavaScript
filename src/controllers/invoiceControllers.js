const Invoice = require("../models/invoiceModel");

exports.getInvoices = async (req, res) => {
  const invoices = await Invoice.find({ userId: req.userId });
  res.json(invoices);
};

exports.createInvoice = async (req, res) => {
  const { products, total } = req.body;
  const newInvoice = new Invoice({ userId: req.userId, products, total });
  const saved = await newInvoice.save();
  res.status(201).json(saved);
};
