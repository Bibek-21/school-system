"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");
(() => {
    module.exports = async (obj) => {
        try {
            const { v4: uuidv4 } = require('uuid');
            const now = new Date().getTime();


            const querystring = sqlstring.format(`INSERT INTO authors  (uuid, authorName, address, Contact, bookId,  createdAt) VALUES (?, ?, ?, ?,?, ?) `, [
                
                    uuidv4(),
                    obj.authorName,
                    obj.address,
                    obj.Contact,
                    obj.bookId,
                    now
                
            ]);


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
