"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");
(() => {
    module.exports = async (obj) => {
        try {
            const { v4: uuidv4 } = require('uuid');
            const now = new Date().getTime();


            const querystring = sqlstring.format(`INSERT INTO books  (uuid, bookName, bookId, price, issueDate,  createdAt) VALUES (?, ?, ?, ?, ?, ?) `, [
                uuidv4(),
                obj.bookName,
                obj.bookId,
                obj.price,
                obj.issueDate,
                now
            ]);

            const checker = `select bookId from books where bookId=${obj.bookId}`

            const [result] = await helper.mysqlHelper.query(checker);

            if (result.length > 0) {
                return false
            }

            else {

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
}) ();
