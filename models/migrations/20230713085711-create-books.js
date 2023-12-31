'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
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
      bookName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bookId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      issueDate: {
        type: Sequelize.DATE
      },
      isDeleted:{
        type: Sequelize.BOOLEAN,
        default: 0

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
    await queryInterface.dropTable('books');
  }
};