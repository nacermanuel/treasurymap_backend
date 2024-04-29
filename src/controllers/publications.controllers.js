const PublicationsServices = require("../services/publications.services");

const getLatestPublications = async (req, res, next) => {
  try {
    const result = await PublicationsServices.GetLatestPublications();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLatestPublications,
};
