const Express = require("express");
const Router = Express.Router();

const {
  getAllShops,
  createShop,
  validateShop,
} = require("../controllers/shop.controller");
const { admins } = require("../assets/codes");

Router.get(`${process.env.API_URI}getAllShops`, async (req, res) => {
  const response = await getAllShops();

  if (response.data == null) {
    res.status(304).json(response);
  } else {
    res.status(200).json(response);
  }
});

Router.post(`${process.env.API_URI}createShop`, async (req, res) => {
  const request = req.body;
  const shop = {
    id: request.id,
    name: request.name,
    direction: {
      street: request.direction.street,
      number: request.direction.number,
      postalCode: request.direction.postalCode,
      city: request.direction.city,
      community: request.direction.community,
      country: request.direction.country,
    },
    phone: request.phone,
    openDay: request.openDay,
  };

  if (validateShop(shop)) {
    const newShop = await createShop(shop);
    res
      .status(200)
      .json({ error: newShop.error, msg: newShop.msg, data: newShop.data });
  } else {
    res.status(400).json({
      error: "Invalid data type",
      msg: admins.errors.ERR_101,
      data: null,
    });
  }
});

module.exports = Router;
