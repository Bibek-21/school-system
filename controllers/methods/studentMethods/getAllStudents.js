"use strict";
const sql = require("../../sql/studentSql/index");
const message = require("../../messageConfig/index");
const schedule = require("node-schedule");

(() => {
    module.exports = async () => {
        const roll = [19070192,19070193,19070195,19070197,19070191];
        try {
            const random = () => {
                function getRandomValueFromArray(roll) {
                    const max = 4;
                    const min = 0;
                    // Get a random index between 0 and the array length (exclusive)
                    // const randomIndex = Math.floor(Math.random() * arr.length());
                    const randomIndex =Math.floor(Math.random() * (max - min + 1) + min)
                    // Return the element at the random index
                    console.log(roll[randomIndex]);
                    return roll[randomIndex];
                }


                const randomRoll = getRandomValueFromArray(roll);
                return randomRoll;
            }



            const randomRollNo = random();

            const job = schedule.scheduleJob(process.env.SCHEDULE, async() => {


                const content = await sql.getAllStudent(randomRollNo);

                if (content) {
                    res.status(200).send({
                        message: message.success.readSucess,
                        response: content
                    })
                    console.log(message.success.readSucess);
                    console.log(content);
                }
                else {
                    res.status(400).send({
                        message: message.failure.readFailure,
                    })
                    console.log(message.failure.readFailure);

                }

            })


            setTimeout(() => {
                console.log("cancelling schedule");
                job.cancel()
            }, 10000);


        } catch (error) {
            console.log(error);

        }

    }


})();