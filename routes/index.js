"use strict";

(() => {
    const express = require("express");
    const router = express.Router();
    const studentRoutes = require('./studentRoutes');
    const teacherRoutes = require('./teacherRoutes');
    const bookRoutes = require('./bookRoutes');
    const authorRoutes = require('./authorRoutes');
    const userRoutes = require('./userRoutes');

    router.use('/student', studentRoutes);
    router.use('/teacher',teacherRoutes);
    router.use('/book',bookRoutes);
    router.use('/author',authorRoutes)
    router.use('/user',userRoutes)

    
    module.exports = router;
})();