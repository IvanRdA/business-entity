const Express = require("express");
const Router = Express.Router();

const { getAllShops, createShop } = require("../controllers/shop.controller");
const { validateString } = require("../controllers/general.controller");

Router.get(`${process.env.API_URI}getAllShops`, async (req, res) => {
  const response = await getAllShops();

  if (response.data == null) {
    res.status(304).json(response);
  } else {
    res.status(200).json(response);
  }
});

Router.post(`${process.env.API_URI}createShop`, async (req, res) => {
  if (validateString(req.body.name)) {
    const newShop = await createShop(req.body);
    return { error: newShop.error, msg: newShop.msg, data: newShop.data };
  } else {
    res.status(400).json({
      error: "Invalid name data type",
      msg: "Nombre de tienda invalido",
      data: null,
    });
  }
});

module.exports = Router;
