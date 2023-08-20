const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  identityNumber: { type: String, required: true, unique: true },
  contact: {
    email: { type: String, required: true, unique: true },
    phone: { type: Number, unique: true },
  },
  dates: {
    startingDate: { type: Number },
    finishingDate: { type: Number },
  },
  contract: {
    type: { type: String },
    hours: { type: Number, max: 40 },
  },
  shop: { type: String },
});

const WORKER = mongoose.model("Worker", workerSchema);

module.exports = WORKER;
