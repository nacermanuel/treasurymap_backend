const SubCategoriesServices = require("../services/subCategories.services");

const getAllSubCategories = async (req, res, next) => {
  try {
    const result = await SubCategoriesServices.getAllSubCategories();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSubCategories,
};
