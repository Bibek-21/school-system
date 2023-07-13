'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID
      },
      studentName: {
        type: Sequelize.STRING
      },
      guardian: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      DOB: {
        type: Sequelize.DATE
      },
      symbolNo: {
        type: Sequelize.INTEGER
      },
      guardianContact: {
        type: Sequelize.INTEGER
      },
      borrowedBookId: {
        type: Sequelize.INTEGER
      },
      classTeacherId: {
        type: Sequelize.INTEGER
      },
      accessStatus: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};