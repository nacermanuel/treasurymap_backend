const { Op, Sequelize } = require("sequelize");
const Articles = require("../models/articles.models");
const Videos = require("../models/videos.models");
const MainPublication = require("../models/mainpublication.models");
const CompaniesServices = require("./companies.service");
const VideosServices = require("./videos.services");
const ArticlesServices = require("./articles.services");

class PublicationsServices {
  static async GetLatestPublications() {
    // Obtener la mainPublication
    const mainPublication = await MainPublication.findOne();
    try {
      // Consultar las últimas publicaciones de videos y artículos
      const latestPublications = await Promise.all([
        Videos.findAll({
          where: {
            live: true,
            id: {
              [Op.not]: mainPublication?.isArticle
                ? 0
                : mainPublication?.publicationId, // Excluir la mainPublication si es un artículo
            },
          },
          order: [["createdAt", "DESC"]], // Ordenar por fecha de creación en orden descendente
          limit: 15, // Limitar el resultado a las últimas 15 publicaciones
        }),
        Articles.findAll({
          where: {
            live: true,
            id: {
              [Op.not]: mainPublication?.isArticle
                ? mainPublication?.publicationId
                : 0, // Excluir la mainPublication si es un video
            },
          },
          order: [["createdAt", "DESC"]], // Ordenar por fecha de creación en orden descendente
          limit: 15, // Limitar el resultado a las últimas 15 publicaciones
        }),
      ]);

      // Combinar y ordenar las publicaciones
      const combinedPublications = latestPublications.reduce(
        (acc, publications) => acc.concat(publications),
        []
      );
      const sortedPublications = combinedPublications
        .sort((a, b) => b.createdAt - a.createdAt) // Ordenar por fecha de creación en orden descendente
        .slice(0, 15); // Tomar solo las primeras 15 publicaciones

      return sortedPublications; // Devolver las últimas 6 publicaciones
    } catch (error) {
      throw error; // Manejar errores
    }
  }

  static async GetRandomPublications() {
    try {
      // Obtener la mainPublication
      const mainPublication = await MainPublication.findOne();

      // Obtener las últimas 6 publicaciones
      const latestPublications =
        await PublicationsServices.GetLatestPublications();
      // Obtener los IDs de las últimas 6 publicaciones
      const latestPublicationIds = latestPublications.map(
        (publication) => publication.id
      );

      // Obtener publicaciones aleatorias de videos
      const randomVideos = await Videos.findAll({
        where: {
          live: true,
          id: {
            [Op.notIn]: [
              mainPublication?.isArticle ? 0 : mainPublication?.publicationId,
              ...latestPublicationIds,
            ],
          },
        },
        order: Sequelize.literal("RANDOM()"), // Orden aleatorio
        limit: 6, // Limita el resultado a 3 publicaciones aleatorias
      });

      // Obtener publicaciones aleatorias de artículos
      const randomArticles = await Articles.findAll({
        where: {
          live: true,
          id: {
            [Op.notIn]: [
              mainPublication?.isArticle ? mainPublication?.publicationId : 0,
              ...latestPublicationIds,
            ],
          },
        },
        order: Sequelize.literal("RANDOM()"), // Orden aleatorio
        limit: 13, // Limita el resultado a 3 publicaciones aleatorias
      });

      // Combinar las publicaciones aleatorias de videos y artículos
      const randomPublications = [...randomVideos, ...randomArticles];

      return randomPublications;
    } catch (error) {
      throw error;
    }
  }

  static async GetPublicationsByCategoryId(id) {
    try {
      const companiesByCategory =
        await CompaniesServices.getCompaniesByMainCategoryId(id);
      if (companiesByCategory.length === 0)
        throw { message: "No companies with this mainCategoryId Founded" };

      const videosPromises = companiesByCategory.map((company) => {
        return VideosServices.GetVideoByCompanyIdService(company.id);
      });

      const articlesPromises = companiesByCategory.map((company) => {
        return ArticlesServices.GetArticleByCompanyIdService(company.id);
      });

      const videosByCompanyId = await Promise.all(videosPromises);
      const articlesByCompanyId = await Promise.all(articlesPromises);

      const combinedPublications = [
        ...articlesByCompanyId,
        ...videosByCompanyId,
      ].flat();

      if (combinedPublications.length == 0) {
        throw { message: "No publications founded" };
      } else return combinedPublications;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PublicationsServices;
