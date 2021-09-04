const express = require('express')

const app = express()

app.get('/getuser',(req,res) =>
{
    res.send("Wlecome user")
    console.log("Hello I am sending response to the user Thank you (:")
    console.log("I am doing changes on the code for reflecting the tasks")
    console.log("I am checking that its working or not after creation of docker image")
})


app.listen(3000,() =>
{
    console.log("I am trying to connect with the server")
})