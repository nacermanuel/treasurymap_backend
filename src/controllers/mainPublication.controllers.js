const MainPublicationServices = require("../services/mainPublication.services");

const getMainPublication = async (req, res, next) => {
  try {
    const result = await MainPublicationServices.GetMainPublication();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateMainPublication = async (req, res, next) => {
  try {
    const { mainPublicationId } = req.params;
    const mainPublicationData = req.body;
    const result = await MainPublicationServices.UpdateMainPublication(
      mainPublicationId,
      mainPublicationData
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateMainPublication,
  getMainPublication,
};
