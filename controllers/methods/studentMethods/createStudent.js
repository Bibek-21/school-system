"use strict";

const sql = require("../../sql/studentSql/index");
const message = require("../../messageConfig/index");
// const helper= require("../../../helper/index.js");
// const mysqlHelper= require("./../../../helper/mySqlHelper")


    (() => {
        module.exports = async (req, res) => {
            try {

                const obj = {

                    studentName: req.body.studentName,
                    guardian: req.body.guardian,
                    address: req.body.address,
                    DOB: req.body.DOB,
                    symbolNo: req.body.symbolNo,
                    guardianContact: req.body.guardianContact,
                    borrowedBookId: req.body.borrowedBookId,
                    classTeacherId: req.body.classTeacherId,
                    accessStatus: req.body.accessStatus

                };


                // const cheker = `select `
                
            

              

                    // const info = await helper.validationHelper.userinfo(obj);

                    const content = await sql.createStudent(obj);
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