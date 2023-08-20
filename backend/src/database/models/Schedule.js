const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema({
  date: { type: Date, required: true, unique: true },
  workers: [
    {
      name: { type: String },
      start: { type: Number },
      end: { type: Number },
    },
  ],
});

const SCHEDULE = mongoose.model("Schedule", scheduleSchema);

module.exports = SCHEDULE;
