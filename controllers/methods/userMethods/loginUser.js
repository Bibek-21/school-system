"use strict";
//  const createSql = require("../../sql/userSql/createUser.js");

const bcrypt = require("bcrypt");
const dotenv= require("dotenv");
const jwt=require("jsonwebtoken")
dotenv.config()

const { loginSql } = require("../../sql/userSql");

(() => {

    module.exports = async (req, res) => {

        const password = req.body.password
        const userName = req.body.userName
        if (!userName || !password) {
            return res.status(400).json({
                message: "Username or Password not present",
            })
        }

        else {
            try {

                const [user] = await loginSql(req);
                if (!user) {
                    res.status(400).json({
                        message: "Login not successful",
                        error: "User not found",
                    })
                }
                else {

                    bcrypt.compare(req.body.password, user.password).then(function (result) {
                        if (result) {
                            const maxAge = 3 * 60 * 60;
                            const token = jwt.sign(
                                { username:user.username, password: req.body.password, },
                                process.env.JWT_SECRET_KEY,
                                {
                                    expiresIn: maxAge, // 3hrs in sec
                                }
                            );
                            res.cookie("jwt", token, {
                                httpOnly: true,
                                maxAge: maxAge * 1000, // 3hrs in ms
                            });

                        }
                    })



                }

            } catch (error) {
                console.log(error);
            }
        }


    }
})
    ();