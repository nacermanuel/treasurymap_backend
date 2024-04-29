const authRoutes = require("./auth.router");
const companiesRoutes = require("./companies.router");
const videosRoutes = require("./videos.router");
const articlesRoutes = require("./articles.router");
const answersRoutes = require("./answers.router");
const categoriesRoutes = require("./categories.router");
const subCategoriesRoutes = require("./subCategories.router");
const imagesRoutes = require("./images.router");
const questionsRoutes = require("./questions.router");
const mapdataRoutes = require("./mapdata.router.js");
const countriesRoutes = require("./countries.router");
const usersRoutes = require("./users.router.js");
const emailsRoutes = require("./emails.router.js");
const mainPublicationRoutes = require("./mainPublication.router.js");
const publicationsRoutes = require("./publications.router.js");
const error = require("../middlewares/error.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/companies", companiesRoutes, error);
  app.use("/api/v1/videos", videosRoutes, error);
  app.use("/api/v1/articles", articlesRoutes, error);
  app.use("/api/v1/answers", answersRoutes, error);
  app.use("/api/v1/categories", categoriesRoutes, error);
  app.use("/api/v1/subCategories", subCategoriesRoutes, error);
  app.use("/api/v1/images", imagesRoutes, error);
  app.use("/api/v1/questions", questionsRoutes, error);
  app.use("/api/v1/mapdata", mapdataRoutes, error);
  app.use("/api/v1/countries", countriesRoutes, error);
  app.use("/api/v1/users", usersRoutes, error);
  app.use("/api/v1/email", emailsRoutes, error);
  app.use("/api/v1/mainPublication", mainPublicationRoutes, error);
  app.use("/api/v1/publications", publicationsRoutes, error);
};

module.exports = routerApi;
