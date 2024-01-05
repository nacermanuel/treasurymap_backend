const { Router } = require("express");
const router = Router();
const { getAllCountries } = require("../controllers/countries.controllers");

router.get("/", getAllCountries);

module.exports = router;
