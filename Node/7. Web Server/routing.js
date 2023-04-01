const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request.url : ', req.url);

    if (req.url === '/') {
        res.end("HomePage text")
    }
    if (req.url === '/contact') {
        res.end("Contact Page text")
    }
    if (req.url === '/about') {
        res.end("About Page text")
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