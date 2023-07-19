"use strict";
const sql = require("../../sql/authorsSql/index");
const message = require("../../messageConfig/index");
(() => {
    module.exports = async (req,res) => {
        try {

            // const obj = {
                
            //     authorName: req.body.authorName,
            //     address: req.body.address,
            //     Contact: req.body.Contact,
            //     bookId: req.body.bookId
            //   };

            const content = await sql.updateAuthor(req);

            if(content){
                res.status(200).send({
                    message: message.success.updateSuccess,
                }) 
            }
            else{
                res.status(400).send({
                    message: message.failure.updateFailure,
                })
            }


        } catch (error) {
            console.log(error);

        }

    }
})();