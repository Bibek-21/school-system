"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const teacher= require("../controllers/methods/teacherMethods/index")



    router.post('/createteacher',teacher.createTeacher);
    router.get('/readteacher/:teacherName',teacher.readTeacher);

    // router.put('/updatestudent/:uuid',student.updateStudent);
    // // router.delete('/deletestudent/:uuid',student.deleteStudent);
   




    module.exports=router;

})();