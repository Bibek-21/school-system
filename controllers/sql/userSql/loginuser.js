"use strict";
const sqlstring = require("sqlstring");
(() => {

    module.exports = async (req) => {
        try {

            const queryString = sqlstring.format(`select userName from users where userName= ? `, req.body.userName)

            const sqlQuery = await helper.mysqlHelper.query(queryString)
            if(sqlQuery){
                return sqlQuery;
            }
            else{
                return false;
            }

        } catch (error) {
            console.log(error);
        }

    }
})();