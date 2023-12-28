const { Router } = require("express");
const router = Router();
const {
    CreateArticle,
    GetArticleByCompanyId,
    DeleteArticle,
} = require("../controllers/articles.controllers");


router.post("/create", CreateArticle );
router.get("/all/:companyId", GetArticleByCompanyId)
router.delete("/:articleid",DeleteArticle)

/*INSERT*/


module.exports = router;