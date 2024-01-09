const { Router } = require("express");
const router = Router();
const {
  CreateArticle,
  GetArticleByCompanyId,
  DeleteArticle,
  GetArticleById,
  updateArticle,
} = require("../controllers/articles.controllers");

router.get("/:articleId", GetArticleById);
router.get("/all/:companyId", GetArticleByCompanyId);
router.post("/create/:companyId", CreateArticle);
router.put("/:articleId", updateArticle);
router.delete("/:articleid", DeleteArticle);

module.exports = router;
