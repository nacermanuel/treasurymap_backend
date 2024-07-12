const { Router } = require("express");
const {
  updateMainPublication,
  getMainPublications,
  getFullMainPublications,
} = require("../controllers/mainPublication.controllers");
const router = Router();

router.get("/", getMainPublications);
router.get("/full", getFullMainPublications);
router.put("/:mainPublicationId", updateMainPublication);

module.exports = router;
