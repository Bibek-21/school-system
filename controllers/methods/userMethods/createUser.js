"use strict";



const { createSql } = require("../../sql/userSql");

(() => {

    module.exports = async (req, res) => {

        const password = req.body.password
        if (password.length < 8) {
            res.send("Password must be atleast 8 character")
        }
        else {
            try {

                const [register] = await createSql(req);

                if (register.affectedRows > 0) {
                    res.json({
                        message: "User Registered Successfully Please Proceed To Login :)"
                    })

                }
                else {
                    res.send("User Registration Failed :( ")
                }

            } catch (error) {
                console.log(error);
            }
        }


    }
})
    ();