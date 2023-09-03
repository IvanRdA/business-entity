const Express = require("express");
const Router = Express.Router();

const { getAllShops } = require("../controllers/shop.controller");

Router.get(`${process.env.API_URI}getAllShops`, async (req, res) => {
  const response = await getAllShops();

  if (response.data == null) {
    res.status(304).json(response);
  } else {
    res.status(200).json(response);
  }
});

Router.post(`${process.env.API_URI}createShop`, async (req, res) => {});

module.exports = Router;
