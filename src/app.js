const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const routerApi = require("./routes");
require("./models/associations.models.js");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels();
db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db synched"))
  .catch((error) => console.log(error));

routerApi(app);

module.exports = app;
