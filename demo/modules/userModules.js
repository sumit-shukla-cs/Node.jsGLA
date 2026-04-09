const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    skills: [String],
    address: {
        city: String,
        pincode: Number,
        state: String,
        country: String,
    },
    isActive: Boolean,
    marks: [{ subject: String, score: Number }],
});

const User = mongoose.model("User", userSchema, "myUsers");
module.exports = User;