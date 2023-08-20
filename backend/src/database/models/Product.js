const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  indentity: {
    SKU: { type: String, minLength: 3, maxLength: 3 },
    name: { type: String, required: true, unique: true },
    category: { type: String, enum: ["Tienda", "Degustacion", "Libros"] },
    family: {
      type: String,
      enum: [
        "Bocadillos",
        "Raciones",
        "Tartas",
        "Paletillas",
        "Jamones",
        "Vinos",
        "Cervezas",
        "Bebidas frias",
        "Bebidas calientes",
      ],
    },
    tax: { type: Number, min: 0.01, max: 1 },
  },
  needs: [
    {
      product: { type: String },
      weight: { type: Number },
      cost: { type: Number },
      supplier: { type: String },
    },
  ],
  definition: {
    totalCost: { type: Number },
  },
});

const PRODUCT = mongoose.model("Product", productSchema);

module.exports = PRODUCT;
