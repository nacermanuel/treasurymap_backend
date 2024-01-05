const CountriesServices = require("../services/countries.services");

const getAllCountries = async (req, res, next) => {
  try {
    const result = await CountriesServices.getAllCountries();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCountries,
};
