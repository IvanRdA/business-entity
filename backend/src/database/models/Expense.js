const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  date: { type: Date },
  supplier: { type: String },
  products: [
    {
      name: { type: String },
      cost: { type: Number },
      units: { type: Number },
      weight: { type: Number },
      qty: { type: Number },
      tax: { type: Number, min: 0.01, max: 1 },
      discount: { type: Number, min: 0.01, max: 1 },
    },
  ],
  paymentMethod: {
    type: String,
    enum: ["Efectivo", "Transferencia", "Bizzum"],
  },
});

const EXPENSE = mongoose.model("Expense", expenseSchema);

module.exports = EXPENSE;
