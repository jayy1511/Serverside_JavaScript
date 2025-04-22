const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  const newProduct = new Product({ name, price, description, imageUrl });
  const saved = await newProduct.save();
  res.status(201).json(saved);
};
