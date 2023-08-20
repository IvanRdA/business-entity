const mongoose = require("mongoose");

const settingsSchema = mongoose.Schema({
  dashboard: {
    viewMode: { type: String, enum: ["Grid", "List"], default: "Grid" },
  },
  shops: {},
  workers: {},
  schedules: {},
  sales: {
    shop: {
      grossMargin: { type: Number, default: 0.7, min: 0.1, max: 1 },
    },
    web: {
      sendingCost: { type: Number, default: 0 },
    },
  },
  clients: {},
  orders: {},
  suppliers: {},
  expenses: {},
  products: {},
  generals: {
    security: {},
    globals: {
      currency: { type: String, default: "€" },
    },
  },
});

const SETTINGS = mongoose.model("Settings", settingsSchema);

module.exports = SETTINGS;
