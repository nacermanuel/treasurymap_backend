const Companies = require("../models/companies.models");

class CompaniesServices {

  static async getOwnedService(userId) {
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


  static async createCompanyService(data){
    const {name, userId} = data
    try{
      const company = await Companies.create(
        {
          name: name,
          userId: userId,
        }
      )
      if(company){
        return company
      } else{
        return false
      }
    } catch(error){
      throw error;
    }
  }




  static async getCompanyDataService(companyId){
    try{
      const company = await Companies.findOne(
        { 
          where: { id: companyId } 
        }
      );
      if(company){
        console.log('dentro del if true');
        return company
      } else{
        console.log('dentro del if false');
        return false
      }      

    }catch(error){
      throw error;
    }
  }

}

module.exports = CompaniesServices;
