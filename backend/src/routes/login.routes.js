// LAUNCHING THE EXPRESS ROUTER METHOD
const Express = require("express");
const Router = Express.Router();

// LOGIN CONTROLLER METHODS IMPORT
const {
  checkCredentials,
  validateEmail,
} = require("../controllers/login.controller");

Router.post(`${process.env.API_URI}validateLogin`, async (req, res) => {
  const { email, password } = req.body;

  if (validateEmail(email.trim().toLowerCase())) {
    res.status(200).send("All good");
  } else {
    res.status(401).send("Unauthorized");
  }
  checkCredentials(email.trim(), password.trim());
});

module.exports = Router;
