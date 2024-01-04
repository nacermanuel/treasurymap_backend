const { Router } = require("express");
const router = Router();
const { uploadImage } = require("../controllers/images.router");

router.post("/", uploadImage);

module.exports = router;
