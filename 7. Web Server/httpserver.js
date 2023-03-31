const http = require('http')

const server = http.createServer((req, res) => {
    res.end("http Server Response")
})

server.listen(8000, "localhost", () => {
    console.log("Server started at localhost:8000");
})