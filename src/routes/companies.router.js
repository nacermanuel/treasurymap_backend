const { Router } = require("express");
const router = Router();
const {
  getCompanyUserOwn,
  createUserCompany,
  getCompanyData,
  upadateCompanyData,
  deleteCompany,
  getAllCompanies,
} = require("../controllers/companies.controllers");

router.get("/", getAllCompanies);
router.get("/:companyId", getCompanyData);
router.get("/getByOwner/:userId", getCompanyUserOwn);
router.post("/create", createUserCompany);
router.put("/:companyId", upadateCompanyData);
router.delete("/:companyId", deleteCompany);

module.exports = router;
