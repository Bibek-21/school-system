"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const book= require("../controllers/methods/bookMethods/index")



    router.post('/createbook',book.createBook);
    router.get('/readbook/:bookId',book.readBook);

    // router.put('/updatestudent/:uuid',student.updateStudent);
    // // router.delete('/deletestudent/:uuid',student.deleteStudent);
   




    module.exports=router;

})();