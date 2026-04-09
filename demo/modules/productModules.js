const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    inStock: Boolean,
    quantity: Number,
});

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
