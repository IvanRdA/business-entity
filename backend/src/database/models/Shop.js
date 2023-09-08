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
    number: { type: String, minLength: 1, maxLength: 4 },
    postalCode: { type: String, minLength: 5, maxLength: 5 },
    city: { type: String },
    community: { type: String },
    country: { type: String },
  },
  phone: { type: String, minLength: 9, maxLength: 9 },
  openDay: { type: Number },
  fixCosts: {
    rent: { type: Number, min: 0 },
    employees: { type: Number, min: 0 },
    supplies: { type: Number, min: 0 },
    others: { type: Number, min: 0 },
  },
});

const SHOP = mongoose.model("Shop", shopSchema);

module.exports = SHOP;
