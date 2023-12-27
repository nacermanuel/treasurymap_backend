
const CompaniesServices = require("../services/companies.service");

const getCompanyUserOwn = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await CompaniesServices.getOwnedService(userId);
    if (result) {
      res.status(200).json(result);
    } else if (!result){
      res.status(400).json({ message: "Not companies found. Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const createUserCompany = async (req, res) => {
  try{
    const data = req.body
    const result = await CompaniesServices.createCompanyService(data);
    if (result){
      res.status(201).json(result);  
    }else if(!result){
      res.status(400).json({ message: "Not created. Controller response" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const getCompanyData = async (req, res) => {
  try{
    const { companyId } = req.params
    const result = await CompaniesServices.getCompanyDataService(companyId);
    if (result){
      res.status(200).json(result);  
    }else if(!result){
      res.status(400).json({ message: "Company not found" });
    }

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const upadateCompanyData = async (req, res) => {
  try{
    const { companyId } = req.params
    const { 
      description, creationDate, turnover, employees, location, 
      companyWebsite, productName, productVersion 
    } = req.body;

    // Validate mandatory fields
    if (!description || !creationDate || !turnover || !employees || !location || !companyWebsite) {
      return res.status(400).send('Missing mandatory fields');
    }

    // Prepare the data object with only provided fields
    const updatedData = {
      description,
      creationDate,
      turnover,
      employees,
      location,
      companyWebsite,
      ...(productName && { productName }),  // Include only if provided
      ...(productVersion && { productVersion }),  // Include only if provided
    };

    const result = await CompaniesServices.updateCompanyDataService(companyId, updatedData);

    if (result){
      //console.log('controllador if entro a true');
      res.status(200).json(result);  
    }else if(!result){
      //console.log('controllado if entro a false');
      res.status(400).json({ message: "Company not found" });
    }

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}



module.exports = {
  getCompanyUserOwn,
  createUserCompany,
  getCompanyData,
  upadateCompanyData
}
