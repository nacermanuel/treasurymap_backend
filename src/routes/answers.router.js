const { Router } = require("express");
const router = Router();
const {
  CreateAnswer,
  GetAnswerByCompanyId,
  updateAnswer,
} = require("../controllers/answers.controllers");

router.get("/:companyId", GetAnswerByCompanyId);
router.post("/:companyId", CreateAnswer);
router.put("/:answerId", updateAnswer);

module.exports = router;
