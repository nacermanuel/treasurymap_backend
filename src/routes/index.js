const authRoutes = require("./auth.router");
const companiesRoutes = require("./companies.router");

const error = require("../middlewares/error.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/companies", companiesRoutes, error);

};

module.exports = routerApi;
