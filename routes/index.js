"use strict";

(() => {
    const express = require("express");
    const router = express.Router();
    const studentRoutes = require('./studentRoutes');
    const teacherRoutes = require('./teacherRoutes');
    const bookRoutes = require('./bookRoutes');
    // const authorRoutes = require('./authorRoutes');

    router.use('/student', studentRoutes);
    router.use('/teacher',teacherRoutes);
    router.use('/book',bookRoutes);

    
    module.exports = router;
})();