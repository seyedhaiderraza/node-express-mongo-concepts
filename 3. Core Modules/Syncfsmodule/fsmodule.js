const fs = require("fs")

//1. writeFileSync : overwrites the data in file, if file not exists creates the file
fs.writeFileSync('read.txt', "Data added from writeFileSync")
    //this line will erase and add new content "Data added from writeFileSync again..." in the file
fs.writeFileSync('read.txt', "Data added from writeFileSync again...")

//2. appendFileSync : adds data EOF
fs.appendFileSync('read.txt', '\n new data appended')

//3.  readFileSync : reads data from file in Buffer data format in bytes

const bufferData = fs.readFileSync('read.txt')
console.log(bufferData); //<Buffer 44 61 74 61 20 61 64 64 65 64 20 66 72 6f 6d 20 77 72 69 74 65 46 69 6c 65 53 79 6e 63 20 61 67 61 69 6e 2e 2e 2e 0a 20 6e 65 77 20 64 61 74 61 20 61 ... 7 more bytes>

const stringData = bufferData.toString()
console.log(stringData);

//4. renameSync

fs.renameSync('read.txt', 'readrenamed.txt')