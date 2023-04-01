//create an http server with home, about contact and userAPI, default 404 case
//create a route /userAPI ->reads userAPI.json -.converts to object data ->prints in response : second user  firstname and email

const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log('request.url : ', req.url);

    if (req.url === '/') {
        res.end("HomePage text")
    } else
    if (req.url === '/contact') {
        res.end("Contact Page text")
    } else
    if (req.url === '/about') {
        res.end("About Page text")
    } else
    if (req.url === '/userAPI') {
        fs.readFile(`${__dirname}/data/userAPI.json`, 'utf-8', (error, data) => {
            console.log(data);
            const objData = JSON.parse(data)
            res.writeHead(201, { "Content-Type": "text/json" })
            res.end(`${objData[1].first_name} has email ${objData[1].email}`)
        })

    } else {
        //handling error routes
        res.writeHead(404, { "Content-Type": "text/html" }) //statusCode: number, headers?
        res.write('<h1>something went wrong!</h1>')
        res.end()

    }
})

server.listen(8000, "localhost", () => {
        console.log("Server started at localhost:8000");
    })
    //100-199 : info
    //200-299 - success
    //300-399 - redirect
    //400-499 - client error
    //500-599 - server error