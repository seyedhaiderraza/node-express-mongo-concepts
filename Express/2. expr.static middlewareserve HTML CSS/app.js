const { log } = require('console')
const express = require('express')
const app = new express()
const path = require('path')

let staticPath = __dirname
staticPath = path.join(staticPath, './public')

console.log(staticPath);

app.use(express.static(staticPath)) // this will render all static files on server app 8000 to the default express route (/)

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(8000, () => {
    console.log('server started');
})