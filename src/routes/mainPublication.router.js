const { Router } = require("express");
const {
  updateMainPublication,
  getMainPublication,
} = require("../controllers/mainPublication.controllers");
const router = Router();

router.get("/", getMainPublication);
router.put("/:mainPublicationId", updateMainPublication);

module.exports = router;
