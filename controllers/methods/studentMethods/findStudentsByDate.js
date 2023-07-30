"use strict";
const sql = require("../../sql/studentSql/index");
(() => {
    module.exports = async(req) => {
        try {

            const content = await sql.findStudentsByDate(req);

            if(content){
                return {message:"Data Founnd",Status:200,data:content[0]}
            }


        } catch (error) {
            console.log(error);

        }

    }
})();