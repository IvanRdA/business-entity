import { useReducer } from "react";

import reducer from "../assets/createShopReducer";

const initialState = {
  id: "",
  name: "",
  direction: {
    street: "",
    number: 0,
    postalCode: 0,
    city: "",
    community: "",
    country: "",
  },
  phone: "666666666",
  openDay: Date.now(),
};

export default function CrearTienda() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function createNewShop(e) {
    e.preventDefault();

    const request = await fetch(
      "http://localhost:4500/private-api/v1-0/createShop",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    );

    const response = await request.json();

    dispatch({ type: "RESET" });
    alert(response.msg);
  }

  return (
    <>
      <section className="text-center text-[--blackColor] max-w-[100vw] w-[100vw] m-auto bg-gradient-to-r from-[#DA172A] to-[#910014] min-h-screen">
        <header className="max-h-[80px] mt-6 text-center w-screen">
          <h1 className="text-[--blackColor] text-center">
            Crea una nueva unidad de negocio
          </h1>
        </header>
        <main>
          <form
            className="m-6 p-6 min-h-screen"
            method="POST"
          >
            <div className="flex flex-col md:flex-row gap-4 w-screen]">
              <h4 className="text-[--whiteColor]">INFORMACION BASICA</h4>
              <label htmlFor="id">IDENTIFICADOR</label>
              <input
                className="w-6"
                type="text"
                id="id"
                value={state.id}
                placeholder="TIE05"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_ID", value: e.target.value })
                }
              />
            </div>

            <label htmlFor="name">NOMBRE DE LA UNIDAD</label>
            <input
              type="text"
              id="name"
              value={state.name}
              placeholder="Las Nubes"
              onChange={(e) =>
                dispatch({ type: "CHANGE_NAME", value: e.target.value })
              }
            />
            <div>
              <h4>DIRECCION</h4>
              <label htmlFor="street">CALLE</label>
              <input
                type="text"
                id="street"
                value={state.direction.street}
                placeholder="Gran Via"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_STREET", value: e.target.value })
                }
              />

              <label htmlFor="number">NUMERO</label>
              <input
                type="number"
                id="number"
                value={state.direction.number}
                min="0"
                placeholder="35"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_NUMBER", value: e.target.value })
                }
              />

              <label htmlFor="postalCode">CODIGO POSTAL</label>
              <input
                type="text"
                id="postalCode"
                value={state.direction.postalCode}
                placeholder="08321"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_POSTALCODE", value: e.target.value })
                }
              />

              <label htmlFor="city">CIUDAD</label>
              <input
                type="text"
                id="city"
                value={state.direction.city}
                placeholder="BARCELONA"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_CITY", value: e.target.value })
                }
              />

              <label htmlFor="community">COMUNIDAD</label>
              <input
                type="text"
                id="community"
                value={state.direction.community}
                placeholder="CATALUNYA"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_COMMUNITY", value: e.target.value })
                }
              />

              <label htmlFor="country">PAIS</label>
              <input
                type="text"
                id="country"
                value={state.direction.country}
                placeholder="ESPANYA"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_COUNTRY", value: e.target.value })
                }
              />
            </div>
            <div>
              <h4>CONTACTO Y APERTURA</h4>
              <label htmlFor="phone">TELEFONO</label>
              <input
                type="text"
                id="phone"
                value={state.phone}
                placeholder="612345678"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_PHONE", value: e.target.value })
                }
              />

              <label htmlFor="openDay">DIA DE APERTURA</label>
              <input
                type="date"
                id="openDay"
                value={new Date(state.openDay).getVarDate}
                placeholder="08/01/2023"
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_OPENDAY",
                    value: new Date(e.target.value).getTime(),
                  })
                }
              />
            </div>
            <div className="m-6">
              <input
                className="bg-[--whiteColor] text-[--blackColor] m-6 p-3 hover:bg-[--blackColor] hover:text-[--whiteColor] hover:scale-110 rounded-tr-md rounded-bl-md ease-out duration-200 cursor-pointer"
                type="submit"
                value="CREAR NUEVA TIENDA"
                onClick={createNewShop}
              />
            </div>
          </form>
        </main>
      </section>
    </>
  );
}
