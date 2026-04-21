const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: "Server is working!" });
});

app.get('/health', (req, res) => {
  res.json({ status: "OK" });
});

try {
  const userRoutes = require("./routes/userRoutes");
  app.use("/users", userRoutes);
  console.log(" User routes loaded");
} catch (err) {
  console.error(" Error loading user routes:", err.message);
}

try {
  const productRoutes = require("./routes/productRoutes");
  app.use("/products", productRoutes);
  console.log("Product routes loaded");
} catch (err) {
  console.error("Error loading product routes:", err.message);
}

try {
  const authRoutes = require("./routes/authRoutes");
  app.use("/auth", authRoutes);
  console.log("Auth routes loaded");
} catch (err) {
  console.error("Error loading auth routes:", err.message);
}

module.exports = app;
