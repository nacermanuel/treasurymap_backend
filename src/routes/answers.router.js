const { Router } = require("express");
const router = Router();
const {
    CreateAnswer,
    GetAnswerByCompanyId,
    updateAnswer,
} = require("../controllers/answers.controllers");


router.post("/create", CreateAnswer );
router.get("/:companyId", GetAnswerByCompanyId)
router.put("/:answerId", updateAnswer)

/*INSERT*/


module.exports = router;