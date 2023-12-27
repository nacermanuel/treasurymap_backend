const { Router } = require("express");
const router = Router();
const { getCompanyUserOwn } = require("../controllers/companies.controllers");


router.post("/userown", getCompanyUserOwn);


module.exports = router;