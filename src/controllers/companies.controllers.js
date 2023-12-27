const CompaniesServices = require("../services/companies.service");

const getCompanyUserOwn = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await CompaniesServices.getOwned(userId);
    if (result) {
      res.status(201).json(result);
    } else if (!result){
      res.status(400).json({ message: "Not companies found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

module.exports = {
  getCompanyUserOwn,
}
