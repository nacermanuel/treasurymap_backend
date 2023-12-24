const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Countries = db.define(
  "countries",
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

module.exports = Countries;