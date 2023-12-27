const { Router } = require("express");
const router = Router();
const { 
    getCompanyUserOwn, 
    createUserCompany, 
    getCompanyData, 
    upadateCompanyData 
} = require("../controllers/companies.controllers");



router.post("/create", createUserCompany);
router.get("/:companyId", getCompanyData);
router.post("/userown", getCompanyUserOwn);
router.put("/:companyId", upadateCompanyData)


module.exports = router;