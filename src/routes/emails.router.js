const { Router } = require("express");
const router = Router();
const {
  sendEmail,
  updateMessage,
  createMessage,
  restorePassword,
} = require("../controllers/emails.controllers");

router.post("/", sendEmail);
router.post("/updateMessage", updateMessage);
router.post("/createMessage", createMessage);
router.post("/restorePassword", restorePassword);

module.exports = router;
