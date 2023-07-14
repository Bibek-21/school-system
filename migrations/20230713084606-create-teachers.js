'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        allowNull: false,
        type: Sequelize.UUID
      },
      teacherName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      teacherId:{
        allowNull: false,
        type: Sequelize.INTEGER

      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(10) // Adjust the length as per your requirements
      },
      majorSubject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      accessStatus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isIn: [[1, 2, 3]]
        }
      },
      createdAt: {
        type: Sequelize.STRING
      },
      updatedAt: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('teachers');
  }
};