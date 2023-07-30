'use strict';
((cron) => {
    const cronJob = require('cron').CronJob;
    const dotenv= require("dotenv");
    dotenv.config()
    const { findStudentDetail} = require('./../controllers/methods/studentMethods');

      const roll ="19070193"
    const keys = process.env.SCHEDULE
  
    cron.init = () => {
        new cronJob(keys, async () => {
            console.log('==========Cron For Send sms Every 1 Minute============' + new Date());
           const studentResponse= await findStudentDetail(roll);

           console.log(`The student response is ${studentResponse.data}`);
        }, null, true, 'America/Los_Angeles'
        );
    }
})(module.exports);