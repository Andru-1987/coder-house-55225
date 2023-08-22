const { Router } = require("express");
const ProductRoutes = require("./api/products.router.js");
const UserRoutes = require("./api/users.router.js");
const HomeRoutes = require("./home.router.js");
const LoginRoutes = require("./login.router.js");
const AdminRoutes = require("./admin.router.js");

const { jwtVerifyAuthToken } = require("../middlewares/jwt.auth.middleware.js");
const { jwtRoutes } = require("./api/auth.router.js");

const api = Router();

api.use("/products", jwtVerifyAuthToken, ProductRoutes);
api.use("/users", jwtVerifyAuthToken, UserRoutes);

/**
 * USAMOS EL AUTH DE JWT
 */

api.use("/jwtAuth", jwtRoutes);

const home = Router();

home.use("/", HomeRoutes);
home.use("/", LoginRoutes);

home.use("/admin", AdminRoutes);

module.exports = {
    api,
    home,
};
