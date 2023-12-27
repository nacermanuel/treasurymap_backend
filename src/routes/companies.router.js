const { Router } = require("express");
const router = Router();
const { getCompanyUserOwn, createUserCompany  } = require("../controllers/companies.controllers");



router.post("/create", createUserCompany);
router.post("/userown", getCompanyUserOwn);


module.exports = router;