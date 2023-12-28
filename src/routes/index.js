const authRoutes = require("./auth.router");
const companiesRoutes = require("./companies.router");
const videosRoutes = require("./videos.router");
const articlesRoutes = require("./articles.router");

const error = require("../middlewares/error.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/companies", companiesRoutes, error);
  app.use("/api/v1/videos", videosRoutes, error);
  app.use("/api/v1/articles", articlesRoutes, error);

};

module.exports = routerApi;
