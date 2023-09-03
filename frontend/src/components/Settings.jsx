import { useEffect, useState } from 'react';

export default function Tiendas(){
    // SETTING STATES FOR THE EMAIL AND PASSWORD INPUTS
    const [email, setMail] = useState('');
    const [password, setPwd] = useState('');
    const [fullName, setName] = useState('');
    const [flags, setFlags] = useState({
      mailFlag: false,
      pwdFlag: false
    })

    const mailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const pwdRegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20}).*$/;

    useEffect(() => {
      setFlags(prevFlags => {
        let newFlags = { ...prevFlags };
        
        if (mailRegExp.test(email)) {
          newFlags.mailFlag = true;
        }else {
          newFlags.mailFlag = false;
        }
    
        if (pwdRegExp.test(password)) {
          newFlags.pwdFlag = true;
        }else {
          newFlags.pwdFlag = false;
        }
    
        return newFlags;
      });
    }, [email, password]);

    // HANDLING THE EMAIL AND PASSWORD INPUTS
    function handleMail(e){
      e.preventDefault();
      setMail(e.target.value);
    };
    function handlePassword(e){
      e.preventDefault();
      setPwd(e.target.value);
    }
    function handleName(e){
      e.preventDefault();
      setName(e.target.value);
    }

    // VALIDATING CREDENTIALS ON THE BACKEND AND MANAGING THE RESPONSE
    async function createAdmin(e){
      e.preventDefault();

      const response = await fetch('http://localhost:4500/private-api/v1-0/createAdmin', {
        method: 'POST',
        headers: 
        { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password })
      })
      const admins = await response.json();

      alert(admins.msg);
      
  
    };

    return(
        <>
        <div className="text-center text-[--blackColor] max-w-[80vw] w-[80vw] m-auto bg-gradient-to-r from-[#DA172A] to-[#910014] min-h-screen">
          <form method="POST" onSubmit={createAdmin}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col">
                <label className="text-[--whiteColor]" htmlFor="email">Nombre completo</label>
                <input
                  value={fullName}
                  className="w-[100%] py-1 text-[--darkRed] focus:border-blue-500 p-2"
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Thomas Bern Jackson"
                  onChange={handleName}
                />
              </div>
                <div className="flex flex-col">
                <label className="text-[--whiteColor]" htmlFor="email">Email</label>
                <input
                  value={email}
                  className="w-[100%] py-1 text-[--darkRed] focus:border-blue-500 p-2"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  onChange={handleMail}
                />
                <span className='text-xs text-[--warningColor]' id='mail-validation-msg'></span>
              </div>
              <div className="flex flex-col">
                <label className="text-[--whiteColor]" htmlFor="password">Password</label>
                <input
                  value={password}
                  className="w-[100%] py-1 focus:border-blue-500 p-2"
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="MyPasswordHere"
                  onChange={handlePassword}
                />
                <span className='text-xs text-[--warningColor]' id='pwd-validation-msg'></span>
              </div>
            </div>
            {flags.mailFlag && flags.pwdFlag
            ? <input
              className= "bg-[#910014] hover:bg-[#DA172A] hover:scale-110 text-[#F0F0F0] py-2 px-5 m-5 cursor-pointer ease-out duration-200 rounded-tr-md rounded-bl-md "
              type="submit"
              name="submit-btn"
              id="submit-btn"
              value="INICIAR SESION"
            />
            : <input
            className= "bg-[--greyColor]] text-[--blackColor] py-2 px-5 m-5"
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="INTRODUZCA VALORES VALIDOS"
            disabled
          />
          }
          </form>
        </div>
        </>
    )
};