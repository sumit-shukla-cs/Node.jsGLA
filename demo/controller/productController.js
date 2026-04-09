const products = require('../modules/productModules');

const getNextId = (collection) => (
    collection.length
        ? Math.max(...collection.map((item) => Number(item.id) || 0)) + 1
        : 1
);

exports.getProducts = async (req, res) => {
    try {
        const allProducts = await products.find();
        res.json(allProducts);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products", error: err });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await products.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching product", error: err });
    }
};

exports.addProduct = async (req, res) => {
    const productData = req.body;

    if (!productData || Object.keys(productData).length === 0) {
        return res.status(400).json({ message: "Product data is required" });
    }

    try {
        const newProduct = new products(productData);
        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (err) {
        return res.status(400).json({ message: "Error adding product", error: err });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await products.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Product deleted", product: deletedProduct });
    } catch (err) {
        return res.status(500).json({ message: "Error deleting product", error: err });
    }
};
