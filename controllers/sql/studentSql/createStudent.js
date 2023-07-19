"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");
(() => {
  module.exports = async (obj) => {
    try {
      const { v4: uuidv4 } = require('uuid');
      const now = new Date().getTime();
      // const sqlquery = `INSERT INTO students  (uuid, studentName, guardian, address, DOB, symbolNo, guardianContact, borrowedBookId, classTeacherId, accessStatus, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `;

      // const params = [
      //   uuidv4(),
      //   obj.studentName,
      //   obj.guardian,
      //   obj.address,
      //   obj.DOB,
      //   obj.symbolNo,
      //   obj.guardianContact,
      //   obj.borrowedBookId,
      //   obj.classTeacherId,
      //   obj.accessStatus,
      //   now
      // ];

      const checker = `select symbolNo from students where symbolNo=${obj.symbolNo}`

      const [result] = await helper.mysqlHelper.query(checker);

      if (result.length > 0) {
        return false
      }

      else {





        const querystring = sqlstring.format(`INSERT INTO students  (uuid, studentName, guardian, address, DOB, symbolNo, guardianContact, borrowedBookId, classTeacherId, accessStatus, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `, [uuidv4(),
        obj.studentName,
        obj.guardian,
        obj.address,
        obj.DOB,
        obj.symbolNo,
        obj.guardianContact,
        obj.borrowedBookId,
        obj.classTeacherId,
        obj.accessStatus,
          now]);


        const [sqlquery] = await helper.mysqlHelper.query(querystring);

        if (sqlquery.affectedRows > 0) {
          return true;
        } else {
          return false;
        }

      }
    } catch (error) {
      console.log(error);
    }
  }
})();
