import { useReducer } from "react";

import reducer from "../../assets/shopReducer";
import { API_URI } from "../../assets/constants";
import Breadcrumbs from "../Breadcrumbs";

const initialState = {
  id: "",
  name: "",
  direction: {
    street: "",
    number: "",
    postalCode: "",
    city: "",
    community: "",
    country: "",
  },
  phone: "",
  openDay: Date.now(),
  fixCosts: {
    rent: "",
    employees: "",
    supplies: "",
    others: "",
  },
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

  const breadcrumbsProps = { url: "/tiendas", back: "tiendas" };

  return (
    <>
      <section className="text-center text-[--blackColor] w-[80vw] bg-gradient-to-r from-[#DA172A] to-[#910014] min-h-[95vh]">
        <Breadcrumbs data={breadcrumbsProps} />
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
                    className={
                      state.id !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
                    onChange={(e) =>
                      dispatch({ type: "CHANGE_ID", value: e.target.value })
                    }
                  />
                  <small className="block">
                    3 letras mayusculas y 2 numeros
                  </small>
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
                    className={
                      state.name !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
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
                    required
                    id="street"
                    value={state.direction.street}
                    pattern="[a-zA-Z\s]+"
                    className={
                      state.direction.street !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
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
                    type="text"
                    required
                    id="number"
                    value={state.direction.number}
                    className={
                      state.direction.number !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
                    pattern="[0-9]{1,4}"
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
                    required
                    id="postalCode"
                    value={state.direction.postalCode}
                    placeholder="08321"
                    pattern="[0-9]{5}"
                    className={
                      state.direction.postalCode !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
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
                    required
                    value={state.direction.city}
                    pattern="[a-zA-Z\s]+"
                    className={
                      state.direction.city !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
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
                    required
                    value={state.direction.community}
                    pattern="[a-zA-Z\s]+"
                    className={
                      state.direction.community !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
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
                    required
                    id="country"
                    value={state.direction.country}
                    pattern="[a-zA-Z\s]+"
                    className={
                      state.direction.country !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
                    placeholder="Espanya"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_COUNTRY",
                        value: e.target.value,
                      })
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
                    required
                    value={state.phone}
                    pattern="[0-9]{9}"
                    className={
                      state.phone !== ""
                        ? "invalid:border-red-500 invalid:border-2 text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                        : "text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    }
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
                    required
                    value={new Date(state.openDay).getVarDate}
                    className="text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
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
            <div className="w-[60vw] m-auto p-2">
              <h4 className="text-[--mainRed]">GASTOS FIJOS</h4>
              <div className="grid grid-cols-2 grid-flow-row justify-center p-2">
                <div>
                  <label
                    htmlFor="rent"
                    className="block"
                  >
                    ALQUILER
                  </label>
                  <input
                    type="number"
                    id="rent"
                    required
                    value={state.fixCosts.rent}
                    pattern="[0-9]"
                    className="text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    onChange={(e) =>
                      dispatch({ type: "CHANGE_RENT", value: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="employees"
                    className="block"
                  >
                    SUELDOS
                  </label>
                  <input
                    type="number"
                    id="employees"
                    required
                    value={state.fixCosts.employees}
                    className="text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_EMPLOYEES",
                        value: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="supplies"
                    className="block"
                  >
                    SUMINISTROS
                  </label>
                  <input
                    type="number"
                    id="supplies"
                    required
                    value={state.fixCosts.supplies}
                    pattern="[0-9]"
                    className="text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_SUPPLIES",
                        value: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="others"
                    className="block"
                  >
                    OTROS
                  </label>
                  <input
                    type="number"
                    id="others"
                    required
                    value={state.fixCosts.others}
                    className="text-center  valid:border-green-500 valid:border-2 text-[--blackColor]"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_OTHERS",
                        value: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="m-6">
              {state.name &&
              state.id &&
              state.direction.street &&
              state.direction.number &&
              state.direction.postalCode &&
              state.direction.city &&
              state.direction.community &&
              state.direction.country &&
              state.phone &&
              state.openDay &&
              state.fixCosts.rent &&
              state.fixCosts.employees &&
              state.fixCosts.supplies &&
              state.fixCosts.others !== "" ? (
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
                  value="TODOS LOS CAMPOS REQUERIDOS"
                  disabled
                />
              )}
            </div>
          </form>
        </main>
      </section>
    </>
  );
}
