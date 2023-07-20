"use strict";
const sqlstring = require("sqlstring");
const helper= require("../../../helper");
(() => {

    module.exports = async (req) => {
        try {

            const queryString = sqlstring.format(`select userName,password from users where userName= ? `, req.body.userName)

            const [sqlQuery] = await helper.mysqlHelper.query(queryString)
            if(sqlQuery){
                return sqlQuery[0];
            }
            else{
                return false;
            }

        } catch (error) {
            console.log(error);
        }

    }
})();