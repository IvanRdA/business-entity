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
    postalCode: { type: String, minLength: 5, maxLength: 5 },
    city: { type: String },
    community: { type: String },
    country: { type: String },
  },
  phone: { type: String, minLength: 9, maxLength: 9 },
  openDay: { type: Number },
});

const SHOP = mongoose.model("Shop", shopSchema);

module.exports = SHOP;
