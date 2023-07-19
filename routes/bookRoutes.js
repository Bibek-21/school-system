"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const book= require("../controllers/methods/bookMethods/index")



    router.post('/createbook',book.createBook);
    router.get('/readbook/:bookId',book.readBook);
    router.put('/updatebook/:uuid',book.updateBook);
    router.delete('/deletebook/:uuid',book.deleteBook);
    router.get("/studentsbybookid/:bookId",book.findStudentByBookId)
   




    module.exports=router;

})();