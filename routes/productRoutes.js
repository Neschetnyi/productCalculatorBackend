const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

// Получить все продукты
router.get("/", getProducts);

// Создать новый продукт
router.post("/", createProduct);

module.exports = router;
