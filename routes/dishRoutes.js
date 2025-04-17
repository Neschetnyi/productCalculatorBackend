// routes/dishRoutes.js
const express = require("express");
const router = express.Router();
const {
  getDishes,
  createDish,
  updateDish,
  deleteDish,
} = require("../controllers/dishController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getDishes);
router.post("/", protect, createDish);
router.put("/:id", protect, updateDish);
router.delete("/:id", protect, deleteDish);

module.exports = router;
