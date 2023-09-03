require("../database/database.js");
const USER = require("../database/models/User.js");

const bcrypt = require("bcrypt");

const loginController = {
  checkLoginCredentials: async (email, password) => {
    try {
      const user = await USER.find({ email });

      if (user.length == 0) {
        return {
          error: "Unregistered email",
          msg: "Email no registrado",
          data: null,
        };
      }

      const compare = await bcrypt.compare(password, user[0].password);

      if (compare) {
        return { error: null, msg: "Login correcto", data: user };
      } else {
        return { error: "No autorizado", msg: "No autorizado", data: null };
      }
    } catch (e) {
      return e;
    }
  },
};

module.exports = loginController;
