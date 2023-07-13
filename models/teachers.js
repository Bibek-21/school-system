'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teachers.init({
    uuid: DataTypes.UUID,
    teacherName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    majorSubject: DataTypes.STRING,
    accessStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'teachers',
  });
  return teachers;
};