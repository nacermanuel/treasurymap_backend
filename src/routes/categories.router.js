const { Router } = require("express");
const router = Router();
const {
  getAllCategories,
  getCategoryById,
} = require("../controllers/categories.controllers");

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

module.exports = router;
