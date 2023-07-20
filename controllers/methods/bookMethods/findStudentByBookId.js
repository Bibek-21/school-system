"use strict";
const sql = require("../../sql/bookSql/index");
const message = require("../../messageConfig/index");
(() => {
    module.exports = async (req,res) => {
        try {

            const content = await sql.findStudentByBookId(req);
            if(content){
                res.status(200).send({
                    message: message.success.readSucess,
                    // details: `The name of student is ${content[0].studentName} 
                    // and symbol no is ${content[0].symbolNo}
                    // Class teacher is ${content[0].teacherName}
                    // He has borrowed ${content[0].bookName} from library
                    // `,
                    response:content
                }) 
            }
            else{
                res.status(400).send({
                    message: message.failure.readFailure,
                })
            }


        } catch (error) {
            console.log(error);

        }

    }
})();