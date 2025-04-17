// routes/menuRoutes.js
const express = require("express");
const router = express.Router();
const {
  getMenus,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menuController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getMenus);
router.post("/", protect, createMenu);
router.put("/:id", protect, updateMenu);
router.delete("/:id", protect, deleteMenu);

module.exports = router;
