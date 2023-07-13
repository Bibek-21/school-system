'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init({
    uuid: DataTypes.UUID,
    studentName: DataTypes.STRING,
    guardian: DataTypes.STRING,
    address: DataTypes.STRING,
    DOB: DataTypes.DATE,
    symbolNo: DataTypes.NUMBER,
    guardianContact: DataTypes.STRING,
    borrowedBookId: DataTypes.NUMBER,
    classTeacherId: DataTypes.NUMBER,
    accessStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};