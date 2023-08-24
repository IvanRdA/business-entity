const loginController = {
  checkCredentials: (mail, pwd) => {
    let mailFlag = false;
    let pwdFlag = false;

    const mailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (mailRegExp.test(mail)) {
      mailFlag = true;
    }
    const pwdRegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20}).*$/;
    if (pwdRegExp.test(pwd)) {
      pwdFlag = true;
    }

    if (mailFlag && pwdFlag) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = loginController;
