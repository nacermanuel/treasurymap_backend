const { Router } = require("express");
const router = Router();
const {
  CreateAnswer,
  GetAnswerByCompanyId,
  updateAnswer,
  deleteAllAnswersByCompanyId,
} = require("../controllers/answers.controllers");

router.get("/:companyId", GetAnswerByCompanyId);
router.post("/:companyId", CreateAnswer);
router.put("/:answerId", updateAnswer);
router.delete("/:companyId", deleteAllAnswersByCompanyId);

module.exports = router;
