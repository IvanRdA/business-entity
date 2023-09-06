require("../database/database.js");
const USER = require("../database/models/User.js");

const bcrypt = require("bcrypt");

const { login } = require("../assets/codes.js");

const loginController = {
  checkLoginCredentials: async (email, password) => {
    try {
      const user = await USER.find({ email });

      if (user.length == 0) {
        return {
          error: "Unregistered email",
          msg: login.errors.ERR_01,
          data: null,
        };
      }

      const compare = await bcrypt.compare(password, user[0].password);

      if (compare) {
        return { error: null, msg: login.success.SUC_01, data: user };
      } else {
        return { error: "No autorizado", msg: login.errors.ERR_02, data: null };
      }
    } catch (e) {
      return { error: e, msg: login.errors.ERR_03, data: e };
    }
  },
};

module.exports = loginController;
