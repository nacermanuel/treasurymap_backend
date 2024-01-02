const { Router } = require("express");
const router = Router();
const {
  getAllSubCategories,
} = require("../controllers/subCategories.controllers");

router.get("/", getAllSubCategories);

module.exports = router;
