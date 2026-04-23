const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  inStock: Boolean,
  quantity: Number,
});

// Pre-save hook
productSchema.pre("save", function (next) {
  console.log("Saving product...");
  next();
});

// Post-save hook
productSchema.post("save", function (doc) {
  console.log("Product saved:", doc);
});

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
