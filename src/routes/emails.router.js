const { Router } = require("express");
const router = Router();
const {
  sendEmail,
  updateMessage,
  createMessage,
} = require("../controllers/emails.controllers");

router.post("/", sendEmail);
router.post("/updateMessage", updateMessage);
router.post("/createMessage", createMessage);

module.exports = router;
