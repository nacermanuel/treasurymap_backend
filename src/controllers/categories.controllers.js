const CategoriesServices = require("../services/categories.services");

const getAllCategories = async (req, res, next) => {
  try {
    const result = await CategoriesServices.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CategoriesServices.getCategoryById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
};
