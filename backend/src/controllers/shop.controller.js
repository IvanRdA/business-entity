require("../database/database.js");
const SHOP = require("../database/models/Shop.js");

const shopController = {
  // SHOPS
  createShop: () => {},
  updateShop: (id) => {},
  deleteShop: (id) => {},
  getAllShops: async () => {
    try {
      const shops = await SHOP.find();

      return { error: null, msg: "Todas las tiendas registradas", data: shops };
    } catch (e) {
      return { error: e, msg: "Error encontrando las tiendas", data: null };
    }
  },
  getSingleShop: (id) => {},
};

module.exports = shopController;