import { useEffect, useState } from "react";

import { API_URI } from "../assets/constants";

export default function Home() {
  // SETTING STATES FOR THE EMAIL AND PASSWORD INPUTS
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [flags, setFlags] = useState({
    mailFlag: false,
    pwdFlag: false,
  });

  const mailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const pwdRegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20}).*$/;

  useEffect(() => {
    setFlags((prevFlags) => {
      let newFlags = { ...prevFlags };

      if (mailRegExp.test(mail)) {
        newFlags.mailFlag = true;
      } else {
        newFlags.mailFlag = false;
      }

      if (pwdRegExp.test(pwd)) {
        newFlags.pwdFlag = true;
      } else {
        newFlags.pwdFlag = false;
      }

      return newFlags;
    });
  }, [mail, pwd]);

  // HANDLING THE EMAIL AND PASSWORD INPUTS
  function handleMail(e) {
    e.preventDefault();
    setMail(e.target.value);
  }
  function handlePassword(e) {
    e.preventDefault();
    setPwd(e.target.value);
  }

  // VALIDATING CREDENTIALS ON THE BACKEND AND MANAGING THE RESPONSE
  async function loginValidation(e) {
    e.preventDefault();

    const response = await fetch(`${API_URI}validateLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, pwd }),
    });
    const admins = await response.json();

    if (admins.error != null) {
      alert(admins.msg);
    } else {
      alert(admins.msg);
      window.location.href = "http://localhost:3000/dashboard";
    }
  }

  return (
    <div className="flex flex-col text-center items-center justify-center w-[80vw] h-[80vh] md:w-[40vw] md:h-[60vh] bg-[#272727] text-[#F0F0F0] m-auto shadow-[#272727]/50 shadow-lg hover:shadow-[#6A6A6A]/40 ease-out duration-200 p-4">
      <img
        className="w-[300px] m-7"
        src="logo.png"
        alt="Logo de Anima Iberics Gourmet"
      />
      <h1 className="m-3">
        Bienvenido a la entidad de negocio de Anima Iberics
      </h1>
      <h3 className="m-3">
        Inicia sesion para poder trabajar en la plataforma
      </h3>
      <form
        method="POST"
        onSubmit={loginValidation}
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col">
            <label
              className="text-[#DA172A]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={mail}
              className="w-[100%] py-1 text-[--darkRed] focus:border-blue-500 p-2"
              type="text"
              name="email"
              id="email"
              placeholder="example@example.com"
              onChange={handleMail}
            />
            <span
              className="text-xs text-[--warningColor]"
              id="mail-validation-msg"
            ></span>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#DA172A]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={pwd}
              className="w-[100%] py-1 focus:border-blue-500 p-2"
              type="password"
              name="password"
              id="pwd"
              placeholder="MyPasswordHere"
              onChange={handlePassword}
            />
            <span
              className="text-xs text-[--warningColor]"
              id="pwd-validation-msg"
            ></span>
          </div>
        </div>
        {flags.mailFlag && flags.pwdFlag ? (
          <input
            className="bg-[#910014] hover:bg-[#DA172A] hover:scale-110 text-[#F0F0F0] py-2 px-5 m-5 cursor-pointer ease-out duration-200 rounded-tr-md rounded-bl-md "
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="INICIAR SESION"
          />
        ) : (
          <input
            className="bg-[--greyColor]] text-[--blackColor] py-2 px-5 m-5"
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="INTRODUZCA DATOS VALIDOS"
            disabled
          />
        )}
      </form>
    </div>
  );
}
