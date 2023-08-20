const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
  identity: {
    name: { type: String },
    CIF: { type: String, maxLength: 14, minLength: 9 },
    country: { type: String },
    contacts: {
      phone: { type: Number },
      email: { type: String },
    },
    route: { type: String },
  },
  products: [
    {
      name: { type: String },
      cost: { type: Number },
      tax: { type: Number, min: 0.01, max: 1 },
      unit: { type: String, enum: ["Ud", "Kg"] },
    },
  ],
});

const SUPPLIER = mongoose.model("Supplier", supplierSchema);

module.exports = SUPPLIER;
