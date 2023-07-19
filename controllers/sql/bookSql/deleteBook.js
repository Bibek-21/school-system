"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (req) => {
        try {


            const querystring = sqlstring.format(`update books set isDeleted=1  where uuid= ?`, [req.params.uuid]);

            const [sqlquery] = await helper.mysqlHelper.query(querystring)

            if (sqlquery.affectedRows>0) {
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