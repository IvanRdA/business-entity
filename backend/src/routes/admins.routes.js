const Express = require("express");
const Router = Express.Router();

const USER = require("../database/models/User");

const { createNewAdmin } = require("../controllers/admin.controller");

Router.post(`${process.env.API_URI}createAdmin`, async (req, res) => {
  const { fullName, email, password } = req.body;

  const admin = await createNewAdmin(fullName, email, password);

  if (admin.error == null) {
    res.status(200).json(admin);
  } else {
    res.status(401).json(admin);
  }
});

Router.get(`${process.env.API_URI}seeAdmins`, async (req, res) => {
  const admins = await USER.find();

  res.json(admins);
});

module.exports = Router;
