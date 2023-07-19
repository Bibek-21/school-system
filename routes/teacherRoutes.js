"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const teacher= require("../controllers/methods/teacherMethods/index")



    router.post('/createteacher',teacher.createTeacher);
    router.get('/readteacher/:teacherId',teacher.readTeacher);
    router.put('/updateteacher/:uuid',teacher.updateTeacher);
    router.delete('/deleteteacher/:uuid',teacher.deleteTeacher);
    router.get('/findTeacherDetail/:teacherId',teacher.findTeacherDetail);

   




    module.exports=router;

})();