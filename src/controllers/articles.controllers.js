const ArticlesServices = require("../services/articles.services");

const CreateArticle = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const articleData = req.body;
    articleData.companyId = companyId;
    console.log(articleData);
    const result = await ArticlesServices.createArticleService(articleData);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const GetArticleByCompanyId = async (req, res) => {
  try {
    const { companyId } = req.params;

    const result = await ArticlesServices.GetArticleByCompanyIdService(
      companyId
    );

    if (result) {
      res.status(200).json(result);
    } else if (!result) {
      res.status(400).json({ message: "Error Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const DeleteArticle = async (req, res) => {
  try {
    const { articleid } = req.params;

    const result = await ArticlesServices.DeleteArticleService(articleid);

    if (result) {
      res.status(200).json(result);
    } else if (!result) {
      res
        .status(400)
        .json({ message: "Video does not exist. Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const GetArticleById = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const result = await ArticlesServices.GetArticleByIdService(articleId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateArticle = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const articleData = req.body;
    const result = await ArticlesServices.UpdateArticleService(
      articleId,
      articleData
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CreateArticle,
  GetArticleByCompanyId,
  DeleteArticle,
  GetArticleById,
  updateArticle,
};
