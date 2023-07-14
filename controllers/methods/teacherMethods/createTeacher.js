"use strict";

const sql = require("../../sql/teacherSql/index");
const message = require("../../messageConfig/index");

(() => {
    module.exports = async (req, res) => {
        try {

            const obj = {

                teacherName: req.body.teacherName,
                teacherId: req.body.teacherId,
                address: req.body.address ,
                phone: req.body.phone ,
                majorSubject: req.body.majorSubject ,
                accessStatus: req.body.accessStatus 

            };

            // const info = await helper.validationHelper.userinfo(obj);

            const content = await sql.createTeacher(obj);
        if (content == true) {
                res.status(200).send({
                    message: message.success.createSucess,
                })
            }
            else {
                res.status(400).send({
                    message: message.failure.createFailure,
                })
            }




        } catch (error) {
            console.log(error);

        }

    }

})();