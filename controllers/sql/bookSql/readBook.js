"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (req) => {
        try {


            const querystring = sqlstring.format(`select * from books where bookId= ? and isDeleted = 0`, [req.params.bookId]);

            const [sqlquery] = await helper.mysqlHelper.query(querystring)

            if (sqlquery[0]) {
                return sqlquery;
            }
            else {
                return false;
            }
        }



        catch (error) {
            console.log(error);

        }


    }


}) ();