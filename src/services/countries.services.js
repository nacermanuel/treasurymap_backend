const Countries = require("../models/countries.models");

class CategoriesServices {
  static async getAllCountries() {
    try {
      const result = await Countries.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getCountryById(id) {
    try {
      const result = await Countries.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;
