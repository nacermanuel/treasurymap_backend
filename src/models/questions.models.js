const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Questions = db.define("questions", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    field: "body",
    allowNull: false,
  },
});

module.exports = Questions;
