const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const routerApi = require("./routes");
const seeder = require("./seeders/seed");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels();
db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => {
    console.log("db synched");
    seeder();
  })
  .catch((error) => console.log(error));

routerApi(app);

module.exports = app;
