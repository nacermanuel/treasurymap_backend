const MainPublicationServices = require("../services/mainPublication.services");

const getMainPublications = async (req, res, next) => {
  try {
    const result = await MainPublicationServices.getMainPublication();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateMainPublication = async (req, res, next) => {
  try {
    const { mainPublicationId } = req.params;
    const mainPublicationData = req.body;
    const result = await MainPublicationServices.updateMainPublication(
      mainPublicationId,
      mainPublicationData
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getFullMainPublications = async (req, res, next) => {
  try {
    const result = await MainPublicationServices.getFullMainPublication();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateMainPublication,
  getMainPublications,
  getFullMainPublications,
};
