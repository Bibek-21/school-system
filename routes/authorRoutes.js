"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const author= require("../controllers/methods/authorsMethods/index")



    router.post('/createauthor',author.createAuthor);
    router.get('/readauthor/:bookId',author.readAuthor);
    router.put('/updateauthor/:uuid',author.updateAuthor);
    router.delete('/deleteauthor/:uuid',author.deleteAuthor);
   router.get('/findauthorbybookid/:bookId',author.findAuthorByBookId)


    module.exports=router;

})();