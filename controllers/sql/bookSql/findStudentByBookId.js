"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (req) => {
        try {


            const querystring = sqlstring.format(`SELECT students.studentName, students.symbolNo, teachers.teacherName,books.bookName
                FROM ((students
                INNER JOIN teachers ON students.classteacherId = teachers.teacherId)
                INNER JOIN books ON books.bookId = students.borrowedBookId)
                            
                where  books.bookId=?`, [req.params.bookId]
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