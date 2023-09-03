import { useEffect, useState } from 'react';

export default function Tiendas(){

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

  return(
    <>
    <section className="text-center text-[--blackColor] max-w-[80vw] w-[80vw] m-auto bg-gradient-to-r from-[#DA172A] to-[#910014] min-h-screen">
      <header className="max-h-[80px] mt-6 text-center w-screen">
        <h1 className="text-[--blackColor] text-center">Tus tiendas</h1>
        <h4 className="text-[--blackColor]">Gestiona tus unidades de negocio. En la lista de abajo encontraras todas las unidades que ya has creado para poder manipular sus datos. En el panel de la izquierda (arriba en versiones mobiles) encontraras un menu de acciones mas visual</h4>
      </header>
      <main>
        {shopList.length == 0 
        ? <div>
          <h3>NO SE HAN ENCONTRADO TIENDAS</h3>
        </div>
        : <table>
          <tr>
            <th>NOMBRE</th>
            <th>DIRECCION</th>
            <th>NUMERO DE TRABAJADORES</th>
            <th>ACCIONES RAPIDAS</th>
          </tr>

        {shopList.map((shop) => {
          <tr id={shop.id}>
            <td>{shop.name}</td>
            <td>{shop.direction.street}</td>
            <td>Por Hacer</td>
            <td><button>EDIT</button><button>DELETE</button></td>
          </tr>
        })}
        </table>
      }

      </main>
    </section>
    </>
  );
};