const { Router } = require("express");
const router = Router();
const {
  sendEmail,
  updateMessage,
  createMessage,
  restorePassword,
  signUpAlert,
  newPublicationAlert,
} = require("../controllers/emails.controllers");

router.post("/", sendEmail);
router.post("/updateMessage", updateMessage);
router.post("/createMessage", createMessage);
router.post("/restorePassword", restorePassword);
router.post("/signupAlert", signUpAlert);
router.post("/newPublicationAlert", newPublicationAlert);

module.exports = router;
