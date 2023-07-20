"use strict";
(()=>{
    
    const express = require("express");
    const router = express.Router();

    const user= require("../controllers/methods/userMethods/index")



    router.post('/createuser',user.createUser);
    router.post('/loginuser',user.loginUser);
  
   




    module.exports=router;

})();