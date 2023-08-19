require("dotenv").config();

// IMPORTS
const morgan = require("morgan");

// LAUNCHING
const Express = require("express");
const app = Express();

// SETTINGS
app.set("port", process.env.PORT || 4000);

// MIDDLEWARES
app.use(morgan(process.env.WORK_ENV));

// ROUTES
// LISTENING
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
