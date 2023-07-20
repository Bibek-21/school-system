"use strict";
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
// other middleware and route handlers...

const jwt = require("jsonwebtoken");
dotenv.config();

const { loginSql } = require("../../sql/userSql");
(()=>{

module.exports = async (req, res) => {
  const password = req.body.password;
  const userName = req.body.userName;

  if (!userName || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  } else {
    try {
      const user = await loginSql(req);

      if (!user) {
        return res.status(400).json({
          message: "Login not successful",
          error: "User not found",
        });
      }

      const result = await bcrypt.compare(password, user.password);

      if (result) {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { username: user.userName, password: req.body.password },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: maxAge, // 3hrs in sec
          }
        );


        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000, // 3hrs in ms
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

})();
