"use strict";

const sql = require("../../sql/authorsSql/index");
const message = require("../../messageConfig/index");

(() => {
    module.exports = async (req, res) => {
        try {

            const obj = {
                
                authorName: req.body.authorName,
                address: req.body.address,
                Contact: req.body.Contact,
                bookId: req.body.bookId
              };

            // const info = await helper.validationHelper.userinfo(obj);

            const content = await sql.createAuthor(obj);
        if (content == true) {
                res.status(200).send({
                    message: message.success.createSucess,
                })
            }
            else {
                res.status(400).send({
                    message: message.failure.createFailure,
                })
            }




        } catch (error) {
            console.log(error);

        }

    }

})();