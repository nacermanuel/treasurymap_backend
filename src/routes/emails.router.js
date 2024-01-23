const { Router } = require("express");
const router = Router();
const {
  sendEmail,
  updateMessage,
  createMessage,
  restorePassword,
  signUpAlert,
} = require("../controllers/emails.controllers");

router.post("/", sendEmail);
router.post("/updateMessage", updateMessage);
router.post("/createMessage", createMessage);
router.post("/restorePassword", restorePassword);
router.post("/signupAlert", signUpAlert);

module.exports = router;
