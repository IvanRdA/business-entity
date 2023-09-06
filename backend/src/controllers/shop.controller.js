require("../database/database.js");
const SHOP = require("../database/models/Shop.js");

const { shops, login } = require("../assets/codes.js");

const shopController = {
  // SHOPS
  createShop: async (shop) => {
    try {
      const newShop = new SHOP(shop);
      await newShop.save();

      return { error: null, msg: "Tienda creada correctamente", data: shop };
    } catch (e) {
      return { error: e, msg: "Error creando la tienda", data: e };
    }
  },
  updateShop: (id) => {},
  deleteShop: (id) => {},
  getAllShops: async () => {
    try {
      const businessUnits = await SHOP.find();

      return { error: null, msg: shops.success.SUC_301, data: shops };
    } catch (e) {
      return { error: e, msg: login.errors.ERR_03, data: null };
    }
  },
  getSingleShop: (id) => {},
};

module.exports = shopController;
