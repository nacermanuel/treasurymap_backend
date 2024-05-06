const { Router } = require("express");
const {
  getLatestPublications,
  getRandomPublications,
  getPublicationsByCategoryId,
} = require("../controllers/publications.controllers");
const router = Router();

router.get("/", getLatestPublications);
router.get("/random", getRandomPublications);
router.get("/:id", getPublicationsByCategoryId);

module.exports = router;
