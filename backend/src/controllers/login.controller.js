const ADMIN = require("../database/models/Admin");
require("../database/database");

const loginController = {
  checkCredentials: (mail, pwd) => {},
  validateEmail: (mail) => {
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regExp.test(mail);
  },
};

module.exports = loginController;
