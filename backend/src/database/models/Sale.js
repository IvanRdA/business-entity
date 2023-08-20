const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
  date: { type: Date, required: true, unique: true, default: Date.now() },
  src: {
    shop: {
      cash: { type: Number },
      card: { type: Number },
      bizzum: { type: Number },
      glovo: { type: Number },
      uber: { type: Number },
    },
    web: {
      card: { type: Number },
      paypal: { type: Number },
    },
  },
  totalSale: { type: Number },
});

const SALE = mongoose.model("Sale", saleSchema);

module.exports = SALE;
