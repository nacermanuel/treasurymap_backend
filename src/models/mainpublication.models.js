const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Articles = require("./articles.models");
const Videos = require("./videos.models");

const MainPublication = db.define("main_publication", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  publicationId: {
    type: DataTypes.INTEGER,
    field: "publication_id",
    allowNull: false,
  },
  isArticle: {
    type: DataTypes.BOOLEAN,
    field: "is_article",
    allowNull: false,
  },
});

module.exports = MainPublication;
