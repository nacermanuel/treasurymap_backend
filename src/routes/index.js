const authRoutes = require("./auth.router");
const error = require("../middlewares/error.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
};

module.exports = routerApi;
