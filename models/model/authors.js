'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  authors.init({
    uuid: DataTypes.UUID,
    authorName: DataTypes.STRING,
    address: DataTypes.STRING,
    Contact: DataTypes.INTEGER,
    bookId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'authors',
  });
  return authors;
};