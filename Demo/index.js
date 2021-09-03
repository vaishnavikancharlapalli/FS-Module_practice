const express = require('express')

const app = express()

app.get('/getuser',(req,res) =>
{
    res.send("Wlecome user")
    console.log("Hello I am sending response to the user Thank you (:")
    console.log("I am doing changes on the code for reflecting the tasks")
})


app.listen(3000,() =>
{
    console.log("I am trying to connect with the server")
})