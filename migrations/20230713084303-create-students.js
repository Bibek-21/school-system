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
        allowNull: false,
        type: Sequelize.UUID
      },
      studentName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      guardian: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DOB: {
        type: Sequelize.DATE
      },
      symbolNo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      guardianContact: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      borrowedBookId: {
        type: Sequelize.INTEGER
      },
      classTeacherId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      accessStatus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          isIn: [[1, 2, 3]]
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};