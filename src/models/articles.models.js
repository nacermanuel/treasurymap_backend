const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Articles = db.define(
  "articles",
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
    body: {
      type: DataTypes.STRING,
      field: "body",
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

module.exports = Articles;