'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
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
      authorName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {

        type: Sequelize.STRING
      },
      Contact: {
        allowNull: false,
        type: Sequelize.STRING(10) // Adjust the length as per your requirements
      },
      bookId: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('authors');
  }
};