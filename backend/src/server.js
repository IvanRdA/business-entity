require("dotenv").config();

// IMPORTS
const morgan = require("morgan");
const cors = require("cors");

// LAUNCHING
const Express = require("express");
const app = Express();

// SETTINGS
app.set("port", process.env.PORT || 4500);

// MIDDLEWARES
app.use(morgan(process.env.WORK_ENV));
app.use(Express.json());
app.use(cors());

// ROUTES
app.use(require("./routes/login.routes"));
app.use(require("./routes/admins.routes"));
app.use(require("./routes/shops.routes"));

// LISTENING
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
