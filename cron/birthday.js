'use strict';
((cron) => {
    const cronJob = require('cron').CronJob;
    const dotenv= require("dotenv");
    dotenv.config()
    const  {findStudentsByDate} = require('./../controllers/methods/studentMethods');

    const currentDate = new Date()
const date= "2000-03-07 00:00:00"
    //   const roll ="19070193"
    // const keys = process.env.SCHEDULE
    const futureDate = new Date(currentDate.getTime() + (5000))
    cron.init = () => {
        new cronJob(futureDate, async () => {
            console.log(new Date());

           const studentResponse= await findStudentsByDate(date);

           console.log(`Happy BirthDay ${studentResponse.data.studentName}`);

        }, null, true, 'America/Los_Angeles'
        );
    }
})(module.exports);