const { Router } = require("express");
const router = Router();
const {
    CreateAnswer,
    GetAnswerByCompanyId,
    updateAnswer,
} = require("../controllers/answers.controllers");


router.post("/create", CreateAnswer );
router.put("/:answerId", updateAnswer)
router.get("/:companyId", GetAnswerByCompanyId)

/*INSERT*/


module.exports = router;