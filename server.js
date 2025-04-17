const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Для парсинга JSON в теле запроса

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Роуты для продуктов
app.use("/api/products", productRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000; // Используем переменную PORT из окружения
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
