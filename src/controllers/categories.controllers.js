const CategoriesServices = require("../services/categories.services");

const getAllCategories = async (req, res, next) => {
  try {
    const result = await CategoriesServices.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
};
