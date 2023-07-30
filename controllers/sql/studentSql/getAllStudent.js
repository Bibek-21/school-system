"use strict";
const sqlstring = require("sqlstring");
const helper = require("../../../helper/index.js");

(() => {
    module.exports = async (roll) => {
        try {

            const querystring = sqlstring.format(` SELECT students.studentName, students.guardian, students.symbolNo, teachers.teacherName, books.bookName, authors.authorName
            FROM (((students
            JOIN teachers ON students.classteacherId = teachers.teacherId)
            JOIN books ON books.bookId = students.borrowedBookId)
            JOIN authors ON books.bookId = authors.bookId)
            WHERE students.symbolNo = ?`, [roll])
            
            // const querystring = sqlstring.format(`SELECT students.studentName, students.guardian,students.symbolNo, teachers.teacherName, books.bookName, authors.authorName
            //     FROM (((students
            //     JOIN teachers ON students.classteacherId = teachers.teacherId)
            //     (JOIN books ON books.bookId = students.borrowedBookId))
            //     JOIN books ON books.bookId = Authors.bookId

            //     )
                            
            //     where  students.symbolNo=?`, [req.params.symbolNo]
            // );

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