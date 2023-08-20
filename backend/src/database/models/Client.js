const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  direction: {
    street: { type: String },
    number: { type: Number },
    postalCode: { type: Number },
    city: { type: String },
    community: { type: String },
    country: { type: String },
  },
  contact: {
    phone: { type: Number },
    email: { type: String },
  },
  orders: [
    {
      url: { type: String },
    },
  ],
  dates: {
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() },
  },
});

const CLIENT = mongoose.model("Client", clientSchema);

module.exports = CLIENT;
