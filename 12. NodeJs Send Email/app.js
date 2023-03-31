//create express app, get route basic, start async fn to start server,start()

/*
1. get express dependency
2. create  an express app
3. define a const PORT
4. create a start method async with try catch block
5. inside start -> call listen on express server created with PORT + callback
6. call start method

*/

const express = require('express')
const sendMail = require("./sendMail")
const app = new express()

const PORT = 8000
const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`server started at ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}
start()

app.get("/", (req, res) => {
    res.send('Home Page express')
})

app.get("/sendMail", sendMail)