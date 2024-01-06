const { Router } = require("express");
const router = Router();
const {
  getAllCountries,
  getCountryById,
} = require("../controllers/countries.controllers");

router.get("/", getAllCountries);
router.get("/:id", getCountryById);

module.exports = router;
