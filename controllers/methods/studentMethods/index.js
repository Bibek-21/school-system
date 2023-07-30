"use strict";
(() => {
    module.exports = {
        createStudent: require("./createStudent.js"),
        readStudent: require("./readStudent"),
        updateStudent:require("./updateStudent"),
        deleteStudent: require("./deleteStudent"),
        findStudentDetail:require("./findStudentDetail.js"),
        getAllStudent:require("./getAllStudents.js")

    }
})();