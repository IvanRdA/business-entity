const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  fulllName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const ADMIN = mongoose.model("Admin", adminSchema);

module.exports = ADMIN;