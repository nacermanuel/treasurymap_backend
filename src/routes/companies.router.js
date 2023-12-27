const { Router } = require("express");
const router = Router();
const { getCompanyUserOwn, createUserCompany, getCompanyData } = require("../controllers/companies.controllers");



router.post("/create", createUserCompany);
router.get("/:companyId", getCompanyData);
router.post("/userown", getCompanyUserOwn);


module.exports = router;