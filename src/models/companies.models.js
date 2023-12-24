const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Companies = db.define(
  "companies",
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
    description: {
      type: DataTypes.STRING,
      field: "description",
    },
    creationDate: {
      type: DataTypes.STRING,
      field: "creation_date",
    },
    turnover: {
      type: DataTypes.INTEGER,
    },
    employees: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    }, 
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
      references:{
        model:"users",
        key:"id"
      }
    },  
    companyWebsite: {
      type: DataTypes.STRING,
      field: "company_website",
    },    
    productName: {
      type: DataTypes.STRING,
      field: "product_name",
    },  
    productVersion: {
      type: DataTypes.STRING,
      field: "product_version",
    }, 
  },
);

module.exports = Companies;