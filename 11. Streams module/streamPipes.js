//streams.pipe 

const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {

    const readStr = fs.createReadStream('rndmFile.txt') //create R stream
    res.write(`Streams pipe ---------\n`)
    readStr.pipe(res) //readStr reads data and writes to res, here res is response object

})
server.listen(8000, 'localhost')