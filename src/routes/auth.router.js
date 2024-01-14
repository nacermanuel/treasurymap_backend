const { Router } = require("express");
const router = Router();
const {
  register,
  login,
  updatePassword,
} = require("../controllers/auth.controllers");

router.post("/register", register);
router.post("/login", login);
router.put("/updatePassword/:userId", updatePassword);

module.exports = router;
