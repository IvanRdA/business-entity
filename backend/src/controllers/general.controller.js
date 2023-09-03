const generalController = {
  // VALIDATORS
  validatePassword: (password) => {
    const pwdRegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20}).*$/;

    return pwdRegExp.test(password);
  },
  validateEmail: (email) => {
    const mailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return mailRegExp.test(email);
  },

  validateString: (string) => {
    const stringRegExp = /^[a-zA-Z\s]+$/;

    return stringRegExp.test(string);
  },
};

module.exports = generalController;
