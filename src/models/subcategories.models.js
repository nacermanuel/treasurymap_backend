const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const SubCategories = db.define(
  "sub_categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,      
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
      allowNull: false,
    },

  },
);

module.exports = SubCategories;