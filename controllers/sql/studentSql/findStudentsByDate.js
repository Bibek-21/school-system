"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (date) => {
        try {


            const querystring = sqlstring.format(`select * from students where DOB= ? and isDeleted = ?`, [date,0]);

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