import { useState, useEffect } from 'react';

export default function Home(){
    // SETTING STATES FOR THE EMAIL AND PASSWORD INPUTS
    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');

    const [reqBody, setReqBody] = useState({});

    
    // SETTING AN EFFECT STATUS FOR THE VALIDATIONS OF THE INPUTS
    useEffect(() => {
      const emailInput = document.getElementById('email');
      const pwdInput = document.getElementById('pwd');
      const emailSpan = document.getElementById('mail-validation-msg');
      const pwdSpan = document.getElementById('pwd-validation-msg');
      const submitBtn = document.getElementById('submit-btn');


      const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!regExp.test(mail) && mail){
        emailInput.classList?.remove('border-lime-600', 'border-4');
        emailInput.classList.add('border-amber-400', 'border-4', 'disabled');
        emailSpan.textContent = 'Formato de correo no valido';

      }else if(regExp.test(mail)){
        emailInput.classList?.remove('border-amber-400', 'border-4', 'disabled');
        emailInput.classList.add('border-lime-600', 'border-4');
        emailSpan.textContent = '';
      }
    }, [mail, pwd])

    // HANDLELING THE EMAIL AND PASSWORD INPUTS
    function handleMail(e){
      e.preventDefault();
      setMail(e.target.value);
      console.log(mail);
    };
    function handlePassword(e){
      e.preventDefault();
      setPwd(e.target.value);
      console.log(pwd);
    };

    // VALIDATING CREDENTIALS ON THE BACKEND AND MANAGING THE RESPONSE
    async function loginValidation(e){
      e.preventDefault();
      const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(!regExp.test(mail)){
        alert('Formato de correo incorrecto. Pruebelo de nuevo.');
        setMail('');
      }else{
        setReqBody({
          email: mail
        });
        alert('Working');
      }
      



    };

    return(
        <div
        className="flex flex-col text-center items-center justify-center w-[80vw] h-[80vh] md:w-[40vw] md:h-[60vh] bg-[#272727] text-[#F0F0F0] m-auto shadow-[#272727]/50 shadow-lg hover:shadow-[#6A6A6A]/40 ease-out duration-200 p-4"
      >
        <img
          className="w-[300px] m-7"
          src="logo.png"
          alt="Logo de Anima Iberics Gourmet"
        />
        <h1 className="m-3">Bienvenido a la entidad de negocio de Anima Iberics</h1>
        <h3 className="m-3">Inicia sesion para poder trabajar en la plataforma</h3>
        <form method="POST" onSubmit={loginValidation}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col">
              <label className="text-[#DA172A]" htmlFor="email">Email</label>
              <input
                className="w-[100%] py-1 text-[--darkRed]"
                type="text"
                name="email"
                value={mail}
                id="email"
                placeholder="example@example.com"
                onChange={handleMail}
              />
              <span className='text-xs text-[--warningColor]' id='mail-validation-msg'></span>
            </div>
            <div className="flex flex-col">
              <label className="text-[#DA172A]" htmlFor="password">Password</label>
              <input
                className="w-[100%] py-1"
                type="password"
                name="pwd"
                value={pwd}
                id="pwd"
                placeholder="MyPasswordHere"
                onChange={handlePassword}
              />
              <span className='text-xs text-[--warningColor]' id='pwd-validation-msg'></span>
            </div>
          </div>
          <input
            className={
              reqBody.email //&& reqBody.password 
              ? "bg-[#910014] hover:bg-[#DA172A] hover:scale-110 text-[#F0F0F0] py-2 px-5 m-5 cursor-pointer ease-out duration-200 rounded-tr-md rounded-bl-md" 
              : "bg-[--greyColor] text-[--blackColor] py-2 px-5 m-5 rounded-tr-md rounded-bl-md"
              }
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="INICIAR SESION"
            disabled
          />
        </form>
      </div>
    )
};