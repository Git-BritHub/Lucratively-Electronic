// Imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Imports our database connection from config.js
const sequelize = require('../config/connection.js');

// Initializes Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// Sets up Fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
