// const { UUIDV4 } = require("sequelize");

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Users', [
//       {
//         uuid: UUIDV4,
//         bookName: "English",
//         bookId: "1237654",
//         price: "560",
//         issueDate: "2010/1/23",
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }]);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Users', null, {});
//   }
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const booksData = [];
    const currentDate = new Date();

    for (let i = 1; i <= 10; i++) {
      booksData.push({
        uuid: Sequelize.UUIDV4,
        bookName: `Book ${i}`,
        bookId: `BID-${i}`,
        price: i * 100,
        issueDate: new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000),
        createdAt: currentDate.toISOString(),
        updatedAt: currentDate.toISOString()
      });
    }

    await queryInterface.bulkInsert('books', booksData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
