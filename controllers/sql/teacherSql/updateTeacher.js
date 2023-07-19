"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (req) => {
        try {

const now = new Date().getTime()
            const querystring = sqlstring.format(`update teachers set teacherName =?, updatedAt=?  where uuid= ?`, [req.body.teacherName,now,req.params.uuid]);

            const [sqlquery] = await helper.mysqlHelper.query(querystring)

            if (sqlquery.changedRows>0) {
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