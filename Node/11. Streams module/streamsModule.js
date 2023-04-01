 const fs = require('fs')
 const http = require('http')

 const server = http.createServer()

 server.on('request', (req, res) => {
     //request is a server event
     //will show data from file on loclhost:8000 all at once
     /*   fs.readFile('rndmFile.txt', 'utf-8', (error, data) => {
             if (error) console.log(error)
             res.end(data.toString())
         })
    */
     /*streams way*/

     const readStr = fs.createReadStream('rndmFile.txt') //create R stream

     readStr.on('data', (chunks) => { // add listener for event - data
         res.write(chunks)
     })
     readStr.on('end', (chunks) => { // add listener for event - end of file
         res.end('\n----------end of file chunks data-----------')
     })

     readStr.on('error', (err) => { // add listener for event - error
         res.end(`error while reading file! ${err}`)
     })


 })
 server.listen(8000, 'localhost')