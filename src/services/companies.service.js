const Companies = require("../models/companies.models");

class CompaniesServices {
  static async getOwnedService(userId) {
    try {
      const companiesOwned = await Companies.findAll({
        where: {
          userId: userId,
        },
      });
      if (companiesOwned.length) {
        return companiesOwned;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async createCompanyService(data) {
    const { name, userId } = data;
    try {
      const company = await Companies.create({
        name: name,
        userId: userId,
      });
      if (company) {
        return company;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async getCompanyDataService(companyId) {
    try {
      const company = await Companies.findOne({
        where: { id: companyId },
      });
      if (company) {
        return company;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async updateCompanyDataService(companyId, updatedData) {
    try {
      const company = await Companies.update(updatedData, {
        where: {
          id: companyId,
        },
      });

      if (company[0]) {
        //console.log('SERVICIO dentro del if true');
        return company;
      } else {
        //console.log('SERVICIO dentro del if false');
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async deleteCompany(companyId) {
    try {
      const company = await Companies.destroy({
        where: {
          id: companyId,
        },
      });
      return company;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CompaniesServices;
