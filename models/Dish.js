// models/Dish.js
const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      weight: Number,
    },
  ],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
