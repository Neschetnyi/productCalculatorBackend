// controllers/menuController.js
const Menu = require("../models/Menu");

const getMenus = async (req, res) => {
  const menus = await Menu.find({ author: req.user._id }).populate("dishes");
  res.json(menus);
};

const createMenu = async (req, res) => {
  const { name, dishes } = req.body;
  const menu = new Menu({ name, dishes, author: req.user._id });
  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Меню не найдено" });
    if (!menu.author.equals(req.user._id))
      return res.status(403).json({ message: "Нет доступа" });

    Object.assign(menu, req.body);
    await menu.save();
    res.json(menu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Меню не найдено" });
    if (!menu.author.equals(req.user._id))
      return res.status(403).json({ message: "Нет доступа" });

    await menu.remove();
    res.json({ message: "Удалено" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMenus, createMenu, updateMenu, deleteMenu };
