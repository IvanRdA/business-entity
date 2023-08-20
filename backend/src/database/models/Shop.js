const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  id: {
    type: String,
    maxLength: 5,
    minLength: 5,
    required: true,
    unique: true,
  },
  name: { type: String, required: true, unique: true },
  direction: {
    street: { type: String },
    number: { type: Number },
    postalCode: { type: Number },
    city: { type: String },
    community: { type: String },
    country: { type: String },
  },
  phone: { type: Number },
  openDay: { type: Number },
});

const SHOP = mongoose.model("Shop", shopSchema);

module.exports = SHOP;
