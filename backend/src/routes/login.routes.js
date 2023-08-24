require("../database/database");
const ADMIN = require("../database/models/Admin");

// LAUNCHING THE EXPRESS ROUTER METHOD
const Express = require("express");
const Router = Express.Router();

// LOGIN CONTROLLER METHODS IMPORT
const {
  checkCredentials,
  createAdmin,
} = require("../controllers/login.controller");

Router.post(`${process.env.API_URI}validateLogin`, async (req, res) => {
  const { mail, pwd } = req.body;

  if (checkCredentials(mail, pwd)) {
    const admins = await ADMIN.findOne({ email: mail, password: pwd });
    console.log(admins);

    if (admins.email) {
      res.status(200).json(admins);
    } else {
      res.status(401).json({ status: "Credenciales no autorizadas" });
    }
  } else {
    res
      .status(401)
      .json({ status: "Formato de contrasenya o correo no validos" });
  }
});

Router.patch(`${process.env.API_URI}validateLogin`, async (req, res) => {
  const { email, password, fullName } = req.body;

  const newAdmin = new ADMIN({
    email,
    password,
    fullName,
  });

  newAdmin.save();
  res.json({ status: "Admin created" });
});

module.exports = Router;
