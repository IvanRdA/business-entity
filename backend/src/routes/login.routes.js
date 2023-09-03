// LAUNCHING THE EXPRESS ROUTER METHOD
const Express = require("express");
const Router = Express.Router();

// LOGIN CONTROLLER METHODS IMPORT
const { checkLoginCredentials } = require("../controllers/login.controller");
const {
  validatePassword,
  validateEmail,
} = require("../controllers/general.controller");

// VALIDATING CREDENTIALS FOR LOGIN INTO THE PLATFORM
Router.post(`${process.env.API_URI}validateLogin`, async (req, res) => {
  const { mail, pwd } = req.body;

  if (validateEmail(mail) && validatePassword(pwd)) {
    const checker = await checkLoginCredentials(mail, pwd);

    checker.error != null
      ? res
          .status(200)
          .json({ error: checker.error, msg: checker.msg, data: checker.data })
      : res
          .status(401)
          .json({ error: checker.error, msg: checker.msg, data: checker.data });
  } else if (!checkEmail(mail)) {
    res.status(401).json({
      error: "Invalid email",
      msg: "Formato de email no valido",
      data: null,
    });
  } else {
    res.status(401).json({
      error: "Invalid password",
      msg: "Formato de contrasenya no valido",
      data: null,
    });
  }
});

module.exports = Router;
