const { Router } = require("express");
const router = Router();
const { getAllCategories } = require("../controllers/categories.controllers");

router.get("/", getAllCategories);

module.exports = router;
