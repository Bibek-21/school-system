"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");
(() => {
    module.exports = async (obj) => {
        try {
            const { v4: uuidv4 } = require('uuid');
            const now = new Date().getTime();

            const querystring = sqlstring.format(`INSERT INTO teachers  (uuid, teacherName,teacherId, address, phone, majorSubject, accessStatus, createdAt) VALUES (  ?, ?,?, ?, ?, ?, ?, ?) `,
                [uuidv4(),
                obj.teacherName,
                obj.teacherId,
                obj.address,
                obj.phone,
                obj.majorSubject,
                obj.accessStatus,
                    now]);


            const [sqlquery] = await helper.mysqlHelper.query(querystring);

            if (sqlquery.affectedRows > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }
})();
