//create folder - User -> create file - bio.txt -> add data "this is bio added"
//add more data "bio looks good"->read data print string data -> rename file
//delete file and folder

const fs = require("fs")

fs.mkdirSync('User')
fs.writeFileSync('User/bio.txt', "this is bio added")
fs.appendFileSync('User/bio.txt', '\n bio looks good')

const buffData = fs.readFileSync('User/bio.txt')
console.log(buffData.toString());

fs.renameSync("User/bio.txt", "User/biorenamed.txt")

fs.unlinkSync('User/biorenamed.txt')
fs.rmdirSync('User') // won't work if its not empty then files need to be unlinked