"use strict";

const sql = require("../../sql/bookSql/index");
const message = require("../../messageConfig/index");

(() => {
    module.exports = async (req, res) => {
        try {

            const obj = {

                bookName: req.body.bookName,
                bookId: req.body.bookId,
                price: req.body.price,
                issueDate: req.body.issueDate
            };

            // const info = await helper.validationHelper.userinfo(obj);

            const content = await sql.createBook(obj);
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