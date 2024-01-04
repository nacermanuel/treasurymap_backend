const { Router } = require("express");
const router = Router();
const { getAllQuestions } = require("../controllers/questions.controllers");

router.get("/", getAllQuestions);

module.exports = router;
