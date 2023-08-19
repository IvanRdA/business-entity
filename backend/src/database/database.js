const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => {
    console.log("Database connected succesfully");
  })
  .catch((err) => {
    console.error("Error connecting to the database: " + err);
  });

module.exports = mongoose;
