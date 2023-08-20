const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
  name: { type: String },
});

const SUPPLIER = mongoose.model("Supplier", supplierSchema);

module.exports = SUPPLIER;
