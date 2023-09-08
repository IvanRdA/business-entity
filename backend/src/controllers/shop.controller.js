require("../database/database.js");
const SHOP = require("../database/models/Shop.js");

const { shops, login } = require("../assets/codes.js");

const shopController = {
  // SHOPS
  createShop: async (shop) => {
    try {
      const checkRepeats = await SHOP.find({ id: shop.id });
      if (checkRepeats.length > 0) {
        return {
          error: "ID field is repeated",
          msg: shops.errors.ERR_302,
          data: null,
        };
      }

      const newShop = new SHOP(shop);
      await newShop.save();

      return { error: null, msg: shops.success.SUC_301, data: shop };
    } catch (e) {
      return { error: e, msg: shops.errors.ERR_303, data: e };
    }
  },
  updateShop: (id) => {},
  deleteShop: (id) => {},
  getAllShops: async () => {
    try {
      const businessUnits = await SHOP.find();

      return { error: null, msg: shops.success.SUC_301, data: businessUnits };
    } catch (e) {
      return { error: e, msg: login.errors.ERR_03, data: null };
    }
  },
  getSingleShop: (id) => {},

  validateShop: (shop) => {
    const cpRegExp = /^[0-9]{5}$/;
    const phoneRegExp = /^[0-9]{9}$/;
    const skuRegExp = /^[A-Z]{3}[0-9]{2}$/;
    const nameRegExp = /^[a-zA-Z0-9\s]+$/;
    const stringRegExp = /^[a-zA-Z\s]+$/;

    if (
      cpRegExp.test(shop.direction.postalCode) &&
      phoneRegExp.test(shop.phone) &&
      skuRegExp.test(shop.id) &&
      nameRegExp.test(shop.name) &&
      stringRegExp.test(shop.direction.street) &&
      stringRegExp.test(shop.direction.city) &&
      stringRegExp.test(shop.direction.community) &&
      stringRegExp.test(shop.direction.country) &&
      typeof shop.direction.number === "number" &&
      typeof shop.openDay === "number" &&
      typeof shop.fixCosts.rent === "number" &&
      typeof shop.fixCosts.employees === "number" &&
      typeof shop.fixCosts.supplies === "number" &&
      typeof shop.fixCosts.others === "number"
    ) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = shopController;
