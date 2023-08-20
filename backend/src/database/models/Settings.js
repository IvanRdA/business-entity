const mongoose = require("mongoose");

const settingsSchema = mongoose.Schema({
  dashboard: {},
  shops: {},
  workers: {},
  schedules: {},
  sales: {},
  clients: {},
  orders: {},
  suppliers: {},
  expenses: {},
  products: {},
  generals: {},
});

const SETTINGS = mongoose.model("Settings", settingsSchema);

module.exports = SETTINGS;
