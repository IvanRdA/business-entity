require("../database/database.js");
const USER = require("../database/models/User.js");

const { admins, login } = require("../assets/codes");

const {
  validateEmail,
  validatePassword,
  validateString,
} = require("../controllers/general.controller.js");

const bcrypt = require("bcrypt");

const adminController = {
  // CLIENTS
  createClient: () => {},
  updateClient: (id) => {},
  deleteClient: (id) => {},
  getAllClients: () => {},
  getSingleClient: (id) => {},

  // EXPENSES
  createExpense: () => {},
  updateExpense: (id) => {},
  deleteExpense: (id) => {},
  getAllExpenses: () => {},
  getSingleExpenses: (id) => {},

  // ORDERS
  createOrder: () => {},
  updateOrder: (id) => {},
  deleteOrder: (id) => {},
  getAllOrders: () => {},
  getSingleOrder: (id) => {},

  // PRODUCTS
  createProduct: () => {},
  updateProduct: (id) => {},
  deleteProduct: (id) => {},
  getAllProducts: () => {},
  getSingleProduct: (id) => {},

  // SALES
  createSale: () => {},
  updateSale: (id) => {},
  deleteSale: (id) => {},
  getAllSales: () => {},
  getSingleSale: (id) => {},

  // SCHEDULES
  createSchedule: () => {},
  updateSchedule: (id) => {},
  deleteSchedule: (id) => {},
  getAllSchedules: () => {},
  getSingleSchedule: (id) => {},

  // SETTINGS
  updateSettings: () => {},
  getSettings: () => {},

  // SUPPLIERS
  createSupplier: () => {},
  updateSupplier: (id) => {},
  deleteSupplier: (id) => {},
  getAllSuppliers: () => {},
  getSingleSupplier: (id) => {},

  // WORKERS
  createWorker: () => {},
  updateWorker: (id) => {},
  deleteWorker: (id) => {},
  getAllWorkers: () => {},
  getSingleWorker: () => {},

  // ADMINS
  createNewAdmin: async (fullName, email, password) => {
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateString(fullName)
    ) {
      try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const newAdmin = new USER({
          fullName,
          email,
          password,
        });

        const stored = await newAdmin.save();

        return {
          error: null,
          msg: admins.success.SUC_101,
          data: newAdmin,
        };
      } catch (e) {
        return { error: e, msg: login.errors.ERR_03, data: e };
      }
    } else {
      return {
        error: "Invalid data type",
        msg: admins.errors.ERR_101,
        data: null,
      };
    }
  },
  deleteAdmin: (id) => {},
  updateAdmin: (id) => {},
  getAllAdmins: () => {},
  getSingleAdmin: (id) => {},

  // DASHBOARD
};

module.exports = adminController;
