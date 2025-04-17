// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  carbs: { type: Number, required: true },
  proteins: { type: Number },
  fats: { type: Number },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
