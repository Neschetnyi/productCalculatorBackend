// models/Menu.js
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dish" }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
