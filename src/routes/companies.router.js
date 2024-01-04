const { Router } = require("express");
const router = Router();
const {
  getCompanyUserOwn,
  createUserCompany,
  getCompanyData,
  upadateCompanyData,
  deleteCompany,
  getAllCompanies
} = require("../controllers/companies.controllers");

router.get("/:companyId", getCompanyData);
router.get("/getByOwner/:userId", getCompanyUserOwn);
router.get("/all/all", getAllCompanies)
router.post("/create", createUserCompany);
router.put("/:companyId", upadateCompanyData);
router.delete("/:companyId", deleteCompany);

module.exports = router;
