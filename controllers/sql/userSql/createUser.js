"use strict";
const sqlstring = require("sqlstring");
const bcrypt= require("bcrypt");
const helper= require("../../../helper/index");
const {v4:uuidv4 }=require("uuid")
const now = new Date().getTime();
const saltRounds= 5;


(()=>
{

    module.exports =async(req)=>
    {
         
try {


        
    let password= req.body.password;
    let salt = bcrypt.genSaltSync(saltRounds);
    password= bcrypt.hashSync(password,salt)
    // const userName=req.userName;
    // const phoneNo=req.phoneNo;
          const obj={
                uuid:uuidv4(),
                userName:req.body.userName,
                phoneNo:req.body.phoneNo,
                password:password,
                createdAt:now
    
            }

            const values = [obj.uuid, obj.userName, obj.phoneNo, obj.password, obj.createdAt];

            const queryString= sqlstring.format(`insert into users (uuid,userName,phoneNo,password,createdAt) values(?,?,?,?,?) `,values)
    
            const sqlQuery=await helper.mysqlHelper.query(queryString)
    
            if(sqlQuery){
                return sqlQuery;
            }
            else{
                return false
            }



    
} catch (error) {

    console.log(error);
    
}
        

        
      
    }

})
();


