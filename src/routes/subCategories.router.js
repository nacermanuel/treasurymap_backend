const { Router } = require("express");
const router = Router();
const {
  getAllSubCategories,
  getSubCategoriesById,
} = require("../controllers/subCategories.controllers");

router.get("/", getAllSubCategories);
router.get("/:id", getSubCategoriesById);

module.exports = router;
