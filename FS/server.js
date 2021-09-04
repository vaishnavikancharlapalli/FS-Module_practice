const express = require('express')
const fs  = require('fs')
const app = express()
require('dotenv').config()
let bulkData = "Hello i am vaishnavi"
fs.readFile("readfile.txt",'utf8',(err,data) =>
{
    if(err) 
    {
        console.log(err)
    }
     
    console.log(data)
    
})



fs.writeFile('writefile.txt',bulkData,(err) =>{
    if(err)
    {
        console.log(err)
    }

})



app.listen(process.env.PORT,() =>
{
    console.log("I a trying to connect with the server")
})