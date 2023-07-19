"use strict";
const sql = require("../../sql/bookSql/index");
const message = require("../../messageConfig/index");
(() => {
    module.exports = async (req,res) => {
        try {

            const content = await sql.deleteBook(req);

            if(content){
                res.status(200).send({
                    message: message.success.deleteSuccess,
                }) 
            }
            else{
                res.status(400).send({
                    message: message.failure.deleteFailure,
                })
            }


        } catch (error) {
            console.log(error);

        }

    }
})();