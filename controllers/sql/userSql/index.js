"use strict";

const loginUser = require("../../methods/userMethods/loginUser");

(()=>{

    module.exports={
        createSql:require("./createUser"),
        loginSql:require("./loginuser")
    }
})
();