// controllers/dishController.js
const Dish = require("../models/Dish");

const getDishes = async (req, res) => {
  const dishes = await Dish.find({ author: req.user._id }).populate(
    "products.product"
  );
  res.json(dishes);
};

const createDish = async (req, res) => {
  const { name, products } = req.body;
  const dish = new Dish({ name, products, author: req.user._id });
  try {
    const newDish = await dish.save();
    res.status(201).json(newDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: "Блюдо не найдено" });
    if (!dish.author.equals(req.user._id))
      return res.status(403).json({ message: "Нет доступа" });

    Object.assign(dish, req.body);
    await dish.save();
    res.json(dish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: "Блюдо не найдено" });
    if (!dish.author.equals(req.user._id))
      return res.status(403).json({ message: "Нет доступа" });

    await dish.remove();
    res.json({ message: "Удалено" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getDishes, createDish, updateDish, deleteDish };
