// routes/fdcRoutes.js
const express = require("express");
const router = express.Router();
const { getFdcApiKey } = require("../controllers/fdcController");

// Без защиты (доступен всем)
router.get("/token", getFdcApiKey);

module.exports = router;
