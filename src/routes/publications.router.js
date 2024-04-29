const { Router } = require("express");
const {
  getLatestPublications,
} = require("../controllers/publications.controllers");
const router = Router();

router.get("/", getLatestPublications);

module.exports = router;
