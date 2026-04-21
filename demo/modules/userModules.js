const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
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

// Pre-save hook
userSchema.pre("save", function (next) {
  console.log("Saving user...");
  next();
});

// Post-save hook
userSchema.post("save", function (doc) {
  console.log("User saved:", doc);
});

const User = mongoose.model("User", userSchema, "myUsers");
module.exports = User;
