"use strict";
(() => {
    module.exports = {
        createStudent: require("./createStudent.js"),
        readStudent: require("./readStudent"),
        updateStudent:require("./updateStudent"),
        deleteStudent: require("./deleteStudent"),
        findStudentDetail:require("./findStudentsDetail.js"),
        getAllStudent: require("./getAllStudent.js"),
        findStudentsByDate:require("./findStudentsByDate.js")


    }
})();