const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Videos = db.define(
  "videos",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false, 
    },
    title: {
      type: DataTypes.STRING,
      field: "title",
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      field: "url",
      allowNull: false,
    },    
    companyId: {
      type: DataTypes.INTEGER,
      field: "company_id",
      allowNull: false,
      references:{
        model:"companies",
        key:"id"
      }
    }, 

  },
);

module.exports = Videos;