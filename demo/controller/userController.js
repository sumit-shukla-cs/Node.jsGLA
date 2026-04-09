const User = require("../modules/userModules");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err.message });
    }
};

exports.addUser = async (req, res) => {
    const userData = req.body;

    if (!userData || Object.keys(userData).length === 0) {
        return res.status(400).json({ message: "User data is required" });
    }

    try {
        const newUser = new User(userData);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (err) {
        return res.status(400).json({ message: "Error adding user", error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user", error: err.message });
    }
};