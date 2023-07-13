"use strict";

const helper= require("../../../helper/index.js");
(() => {
  module.exports = async (obj) => {
    try {
      const { v4: uuidv4 } = require('uuid');
      const sqlquery = `INSERT INTO students  (uuid, studentName, guardian, address, DOB, symbolNo, guradianContact, borrowedBookId, classTeacherId, accessStatus, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW()) `;

      const params = [
        uuidv4(),
        obj.studentName,
        obj.guardian,
        obj.address,
        obj.DOB,
        obj.symbolNo,
        obj.guardianContact,
        obj.borrowedBookId,
        obj.classTeacherId,
        obj.accessStatus
      ];

      const output = await helper.mysqlHelper.query(sqlquery, params);

      if (output[0].affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
})();
