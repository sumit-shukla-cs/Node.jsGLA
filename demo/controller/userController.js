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
    const userData = { ...req.body };

    if (!userData || Object.keys(userData).length === 0) {
        return res.status(400).json({ message: "User data is required" });
    }

    try {
        // Always let MongoDB generate the document id for new users.
        delete userData._id;

        const newUser = new User(userData);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (err) {
        return res.status(400).json({ message: "Error adding user", error: err.message });
    }
};

exports.addUser = async (req, res) => {
    const userMeta = req.body;
    if(userMeta?._id){
        const existingUser = await User.findById(userMeta._id);
        if(existingUser){
            return res.send("User already exists with the provided _id");
        }   
    }
    User.create(userMeta);
    res.send("User added successfully");
}


