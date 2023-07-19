"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const student= require("../controllers/methods/studentMethods/index")



    router.post('/createstudent',student.createStudent);
    router.put('/updatestudent/:uuid',student.updateStudent);
    router.delete('/deletestudent/:uuid',student.deleteStudent);
    router.get('/readstudent/:symbolNo',student.readStudent);
   




    module.exports=router;

})();