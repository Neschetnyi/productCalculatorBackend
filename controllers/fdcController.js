// controllers/fdcController.js
const getFdcApiKey = (req, res) => {
  const token = process.env.FDC_API_KEY;
  if (!token) {
    return res.status(500).json({ message: "FDC API ключ не настроен" });
  }

  res.json({ fdcApiKey: token });
};

module.exports = { getFdcApiKey };
