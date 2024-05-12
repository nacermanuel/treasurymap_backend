const MainPublication = require("../models/mainpublication.models");

class MainPublicationServices {
  static async UpdateMainPublication(mainPublicationId, mainPublicationData) {
    try {
      const result = await MainPublication.update(mainPublicationData, {
        where: { id: mainPublicationId },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async GetMainPublication() {
    try {
      const result = await MainPublication.findByPk(1);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MainPublicationServices;
