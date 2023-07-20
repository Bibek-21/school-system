"use stricts";


(() => {
    const express = require("express")
    router = express.Router();

    const createUser = require("../controllers/methods/userMethods/index")

    router.post("/registeruser", createUser.createUser);
    router.post("/login",createUser.loginUser)



    module.exports = router;
})()
