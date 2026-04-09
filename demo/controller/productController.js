const products = require('../modules/productModules');

const getNextId = (collection) => (
    collection.length
        ? Math.max(...collection.map((item) => Number(item.id) || 0)) + 1
        : 1
);

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res) => {
    const productId = Number(req.params.id);
    const product = products.find((item) => Number(item.id) === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
};

exports.addProduct = (req, res) => {
    const productData = req.body;

    if (!productData || Object.keys(productData).length === 0) {
        return res.status(400).json({ message: "Product data is required" });
    }

    const newProduct = {
        id: getNextId(products),
        ...productData,
    };

    products.push(newProduct);
    return res.status(201).json(newProduct);
};

exports.deleteProduct = (req, res) => {
    const productId = Number(req.params.id);
    const productIndex = products.findIndex(
        (item) => Number(item.id) === productId
    );

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const [deletedProduct] = products.splice(productIndex, 1);
    return res.status(200).json({
        message: "Product deleted",
        product: deletedProduct,
    });
};
