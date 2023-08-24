const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 9, maxLength: 20 },
  token: { type: String, required: true, unique: true },
});

const ADMIN = mongoose.model("Admin", adminSchema);

module.exports = ADMIN;
