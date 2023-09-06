const codes = {
  shops: {
    errors: {
      ERR_301: "Nombre no valido",
      ERR_302: "ID de tienda repetido",
      ERR_303: "Error creando la tienda",
    },
    success: {
      SUC_301: "Tienda creada correctamente",
    },
  },
  workers: { errors: {}, success: {} },
  schedules: { errors: {}, success: {} },
  sales: { errors: {}, success: {} },
  clients: { errors: {}, success: {} },
  orders: { errors: {}, success: {} },
  suppliers: { errors: {}, success: {} },
  expenses: { errors: {}, success: {} },
  products: { errors: {}, success: {} },
  admins: {
    errors: {
      ERR_101: "Tipo de datos incorrecto",
    },
    success: {
      SUC_101: "Administrador creado correctamente",
    },
  },
  settings: { errors: {}, success: {} },
  login: {
    errors: {
      ERR_01: "Email no registrado",
      ERR_02: "Credenciales no autorizadas",
      ERR_03: "Error al comprobar los datos",
      ERR_04: "Email no registrado",
      ERR_05: "Contrasenya incorrecta",
    },
    success: { SUC_01: "Login correcto" },
  },
};

module.exports = codes;
