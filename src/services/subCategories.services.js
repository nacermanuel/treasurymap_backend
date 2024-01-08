const SubCategories = require("../models/subcategories.models");

class SubCategoriesServices {
  static async getAllSubCategories() {
    try {
      const result = await SubCategories.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getSubCategoryById(id) {
    try {
      const result = await SubCategories.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SubCategoriesServices;
