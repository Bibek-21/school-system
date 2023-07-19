"use strict";
const sql = require("../../sql/bookSql/index");
const message = require("../../messageConfig/index");
(() => {
    module.exports = async (req,res) => {
        try {

            // const obj = {

            //     teacherName: req.body.teacherName,
            //     teacherId: req.body.teacherId,
            //     address: req.body.address ,
            //     phone: req.body.phone ,
            //     majorSubject: req.body.majorSubject ,
            //     accessStatus: req.body.accessStatus 

            // };

            const content = await sql.updateBook(req);

            if(content){
                res.status(200).send({
                    message: message.success.updateSuccess,
                }) 
            }
            else{
                res.status(400).send({
                    message: message.failure.updateFailure,
                })
            }


        } catch (error) {
            console.log(error);

        }

    }
})();