const mongoose = require("mongoose");

const mbd = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/glaDB", {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB:", err.message);
        console.log("Server will run without database");
    }
}

module.exports = mbd;
