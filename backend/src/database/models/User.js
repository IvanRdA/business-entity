const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: { type: String, default: "Guest" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 9, maxLength: 126 },
  createdAt: { type: Date, default: Date.now() },
  role: { type: String, default: "Admin" },
});

const USER = mongoose.model("User", userSchema);

module.exports = USER;
