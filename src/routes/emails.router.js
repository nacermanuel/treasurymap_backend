const { Router } = require("express");
const router = Router();
const { sendEmail } = require("../controllers/emails.controllers");

router.post("/", sendEmail);

module.exports = router;
