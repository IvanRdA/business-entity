import { useReducer } from "react";

import reducer from "../../assets/shopReducer";
import { API_URI } from "../../assets/constants";

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

    const request = await fetch(`${API_URI}createShop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    const response = await request.json();

    dispatch({ type: "RESET" });
    alert(response.msg);
  }

  return (
    <section className="text-center text-[--blackColor] max-w-[80vw] w-[80vw] m-auto bg-gradient-to-r from-[#DA172A] to-[#910014] min-h-[100vh]">
      <header className="max-h-[80px] mt-6 text-center w-[80vw]">
        <h1 className="text-[--whiteColor] text-center">
          Crea una nueva unidad de negocio
        </h1>
      </header>
      <main>
        <form
          className="h-fit w-[80vw] bg-[--blackColor] text-[--whiteColor] shadow-white/20 shadow-lg mt-8"
          method="POST"
        >
          <div className="w-[60vw] m-auto">
            <h4 className="text-[--mainRed] text-center p-2">
              INFORMACION BASICA
            </h4>
            <div className="grid grid-cols-2 grid-flow-row justify-center p-2">
              <div>
                <label
                  htmlFor="id"
                  className="block"
                >
                  IDENTIFICADOR*
                </label>
                <input
                  type="text"
                  id="id"
                  pattern="[A-Z]{3}[0-9]{2}"
                  required
                  value={state.id}
                  placeholder="TIE05"
                  className="text-center  valid:border-green-500 invalid:text-red-500 text-[--blackColor]"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_ID", value: e.target.value })
                  }
                />
                <small className="block">3 letras mayusculas y 2 numeros</small>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block"
                >
                  NOMBRE DE LA UNIDAD*
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  pattern="[a-zA-Z\s]+"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  value={state.name}
                  placeholder="Las Nubes"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_NAME", value: e.target.value })
                  }
                />
                <small className="block">Sin caracteres especiales</small>
              </div>
            </div>
          </div>
          <div className="w-[60vw] m-auto">
            <h4 className="text-[--mainRed] p-2">DIRECCION</h4>
            <div className="grid grid-cols-3 grid-flow-row grid-rows-auto">
              <div>
                <label
                  htmlFor="street"
                  className="block"
                >
                  CALLE
                </label>
                <input
                  type="text"
                  id="street"
                  value={state.direction.street}
                  pattern="[a-zA-Z\s]+"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  placeholder="Gran Via"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_STREET", value: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block"
                >
                  NUMERO
                </label>
                <input
                  type="number"
                  id="number"
                  value={state.direction.number}
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  min="0"
                  placeholder="35"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_NUMBER", value: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="postalCode"
                  className="block"
                >
                  CODIGO POSTAL
                </label>
                <input
                  type="text"
                  id="postalCode"
                  value={state.direction.postalCode}
                  placeholder="08321"
                  pattern="[0-9]{5}"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_POSTALCODE",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block"
                >
                  CIUDAD
                </label>
                <input
                  type="text"
                  id="city"
                  value={state.direction.city}
                  pattern="[a-zA-Z\s]+"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  placeholder="Barcelona"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_CITY", value: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="community"
                  className="block"
                >
                  COMUNIDAD
                </label>
                <input
                  type="text"
                  id="community"
                  value={state.direction.community}
                  pattern="[a-zA-Z\s]+"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  placeholder="Catalunya"
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_COMMUNITY",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block"
                >
                  PAIS
                </label>
                <input
                  type="text"
                  id="country"
                  value={state.direction.country}
                  pattern="[a-zA-Z\s]+"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  placeholder="Espanya"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_COUNTRY", value: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-[60vw] m-auto p-2">
            <h4 className="text-[--mainRed]">CONTACTO Y APERTURA</h4>
            <div className="grid grid-cols-2 grid-flow-row justify-center p-2">
              <div>
                <label
                  htmlFor="phone"
                  className="block"
                >
                  TELEFONO
                </label>
                <input
                  type="text"
                  id="phone"
                  value={state.phone}
                  pattern="[0-9]{9}"
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  placeholder="612345678"
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_PHONE", value: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="openDay"
                  className="block"
                >
                  DIA DE APERTURA
                </label>
                <input
                  type="date"
                  id="openDay"
                  value={new Date(state.openDay).getVarDate}
                  className="text-center  valid:border-green-500 invalid:border-red-500 text-[--blackColor]"
                  placeholder="08/01/2023"
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_OPENDAY",
                      value: new Date(e.target.value).getTime(),
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="m-6">
            {state.name && state.id != "" ? (
              <input
                className="bg-[--whiteColor] text-[--blackColor] m-6 p-3 hover:bg-[--blackColor] hover:text-[--whiteColor] hover:scale-110 rounded-tr-md rounded-bl-md ease-out duration-200 cursor-pointer"
                type="submit"
                value="CREAR NUEVA TIENDA"
                onClick={createNewShop}
              />
            ) : (
              <input
                className="m-6"
                type="submit"
                value="ID Y NOMBRE REQUERIDOS"
                disabled
              />
            )}
          </div>
        </form>
      </main>
    </section>
  );
}
