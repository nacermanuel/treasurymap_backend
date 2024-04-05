const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Articles = db.define("articles", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    field: "company_id",
    allowNull: false,
    references: {
      model: "companies",
      key: "id",
    },
  },
});

module.exports = Articles;
