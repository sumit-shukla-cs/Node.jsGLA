const users = require('../modules/userModules');
const productController = require('./productController');

const getNextId = (collection) => (
    collection.length
        ? Math.max(...collection.map((item) => Number(item.id) || 0)) + 1
        : 1
);

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.addUser = (req, res) => {
    const userData = req.body;

    if (!userData || Object.keys(userData).length === 0) {
        return res.status(400).json({ message: "User data is required" });
    }

    const newUser = {
        id: getNextId(users),
        ...userData,
    };

    users.push(newUser);
    return res.status(201).json(newUser);
};

exports.getUserById = (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find((item) => Number(item.id) === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
};

exports.addUsers = (req, res) => {
    const students = Array.isArray(req.body) ? req.body : [req.body];
    const validStudents = students.filter(
        (student) => student && Object.keys(student).length > 0
    );

    if (validStudents.length === 0) {
        return res.status(400).json({ message: "Students data is required" });
    }

    const createdStudents = validStudents.map((student) => {
        const newUser = {
            id: getNextId(users),
            ...student,
        };

        users.push(newUser);
        return newUser;
    });

    return res.status(201).json({
        message: "Students added successfully",
        students: createdStudents,
    });
};

// Backward-compatible re-exports for code that still imports product handlers here.
exports.getProducts = productController.getProducts;
exports.getProductById = productController.getProductById;
exports.addProduct = productController.addProduct;
exports.deleteProduct = productController.deleteProduct;

