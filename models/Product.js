const mongoose = require("mongoose");

// Схема для продукта
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
