const { Op } = require("sequelize");
const Articles = require("../models/articles.models");
const Videos = require("../models/videos.models");
const MainPublication = require("../models/mainpublication.models");

class PublicationsServices {
  static async GetLatestPublications() {
    const mainPublication = await MainPublication.findOne();
    try {
      const latestPublications = await Promise.all([
        Videos.findAll({
          where: {
            live: true,
            id: {
              [Op.not]: mainPublication?.isArticle
                ? 0
                : mainPublication?.publicationId,
            },
          },
          order: [["createdAt", "DESC"]],
          limit: 6,
        }),
        Articles.findAll({
          where: {
            live: true,
            id: {
              [Op.not]: mainPublication?.isArticle
                ? mainPublication?.publicationId
                : 0,
            },
          },
          order: [["createdAt", "DESC"]],
          limit: 6,
        }),
      ]);

      const combinedPublications = latestPublications.reduce(
        (acc, publications) => acc.concat(publications),
        []
      );

      const sortedPublications = combinedPublications
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 6);

      return sortedPublications;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PublicationsServices;
