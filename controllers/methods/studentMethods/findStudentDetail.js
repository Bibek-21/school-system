"use strict";
const sql = require("../../sql/studentSql/index");
const message = require("../../messageConfig/index");
(() => {
    module.exports = async (req,res) => {
        try {

            const content = await sql.findStudentDetail(req);

            if(content){
                return {message:"Data Founnd",Status:200,data:content[0]}
            }


        } catch (error) {
            console.log(error);

        }

    }
})();