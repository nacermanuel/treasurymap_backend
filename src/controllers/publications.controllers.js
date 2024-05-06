const PublicationsServices = require("../services/publications.services");

const getLatestPublications = async (req, res, next) => {
  try {
    const result = await PublicationsServices.GetLatestPublications();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getRandomPublications = async (req, res, next) => {
  try {
    const result = await PublicationsServices.GetRandomPublications();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getPublicationsByCategoryId = async (req, res, next) => {
  try {
    const result = await PublicationsServices.GetPublicationsByCategoryId(
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLatestPublications,
  getRandomPublications,
  getPublicationsByCategoryId,
};
