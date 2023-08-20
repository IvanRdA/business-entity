const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  header: {
    date: { type: Date },
    client: { type: String },
    shop: { type: String },
    method: {
      type: String,
      enum: ["Recogida en tienda", "Envio a domicilio", "Envio internacional"],
      default: "Recogida en tienda",
    },
  },
  body: {
    order: [
      {
        productSKU: { type: String },
        product: { type: String },
        pvp: { type: Number },
        qty: { type: Number },
      },
    ],
    costs: {
      sending: { type: Number },
      taxes: { type: Number },
    },
  },
});

const ORDER = mongoose.model("Order", orderSchema);

module.exports = ORDER;
