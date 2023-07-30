"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (req) => {
        try {


            const querystring = sqlstring.format(`SELECT students.studentName, students.guardianName,students.symbolNo, teachers.teacherName, books.bookName, books.authorName
                FROM ((students
                JOIN teachers ON students.classteacherId = teachers.teacherId)
                JOIN books ON books.bookId = students.borrowedBookId)
                            
                where  students.symbolNo=?`, [req.params.symbolNo]
            );

            const [sqlquery] = await helper.mysqlHelper.query(querystring)

            if (sqlquery[0]) {
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


})();