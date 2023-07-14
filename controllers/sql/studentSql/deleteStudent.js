"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (req) => {
        try {


            const querystring = sqlstring.format(`update   from students set isdelete=0  where symbolNo= ?`, [req.params.symbolNo]);

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