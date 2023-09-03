import { useEffect, useState } from 'react';

export default function CrearTienda(){

  const [shopList, setShops] = useState([]);
  const [flag, setFlag] = useState(false);

  async function fetchData(){
    const shops = await fetch("http://localhost:4500/private-api/v1-0/getAllShops");
    const response = await shops.json();
    setShops(response.data);
  };

  useEffect(() => {
    fetchData();
    setFlag(false);
  }, [flag]);

  async function createNewShop(e){
    e.preventDefault();
  }

  return(
    <>
    <section className="text-center text-[--blackColor] max-w-[100vw] w-[100vw] m-auto bg-gradient-to-r from-[#DA172A] to-[#910014] min-h-screen">
      <header className="max-h-[80px] mt-6 text-center w-screen">
        <h1 className="text-[--blackColor] text-center">Crea una nueva unidad de negocio</h1>
      </header>
      <main>
       <form method='POST' onSubmit={createNewShop}>

       </form>
      </main>
    </section>
    </>
  );
};