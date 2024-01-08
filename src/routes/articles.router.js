const { Router } = require("express");
const router = Router();
const {
  CreateArticle,
  GetArticleByCompanyId,
  DeleteArticle,
} = require("../controllers/articles.controllers");

router.get("/all/:companyId", GetArticleByCompanyId);
router.post("/create/:companyId", CreateArticle);
router.delete("/:articleid", DeleteArticle);

module.exports = router;
