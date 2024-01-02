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
}

module.exports = SubCategoriesServices;
