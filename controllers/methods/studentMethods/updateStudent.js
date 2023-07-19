"use strict";
const sql = require("../../sql/studentSql/index");
const message = require("../../messageConfig/index");
(() => {
    module.exports = async (req,res) => {
        try {

            // const obj = {

            //     studentName: req.body.studentName,
            //     guardian: req.body.guardian,
            //     address: req.body.address,
            //     DOB: req.body.DOB,
            //     symbolNo: req.body.symbolNo,
            //     guardianContact: req.body.guardianContact,
            //     borrowedBookId: req.body.borrowedBookId,
            //     classTeacherId: req.body.classTeacherId,
            //     accessStatus: req.body.accessStatus

            // };

            const content = await sql.updateStudent(req);

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