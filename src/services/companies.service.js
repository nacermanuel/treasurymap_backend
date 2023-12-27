const Companies = require("../models/companies.models");

class CompaniesServices {

  static async getOwned(userId) {
    try {
      const companiesOwned = await Companies.findAll({
        where: {
          userId: userId
        },
      });
      if (companiesOwned.length) {
        return companiesOwned
      } else{
        return false
      }
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CompaniesServices;
