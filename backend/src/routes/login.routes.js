const Express = require("express");
const Router = Express.Router();

Router.get("/", async (req, res) => {
  res.send("Working");
});

module.exports = Router;
