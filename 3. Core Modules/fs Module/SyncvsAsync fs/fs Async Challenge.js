// >>>>>>Using Async fs<<<<<<
//create folder -> User -> create file bio.txt with data "Software engineer profile" -> append more data in file
//read data and log string data and not binary buffer data
// -> rename file bio to mybio.txt
// delete file and delete folder

const fs = require('fs')

fs.mkdir('User', (err) => {
    if (err)
        console.log(err);
})

fs.writeFile('User/bio.txt', 'Software engineer profile', (err) => {
    if (err)
        console.log(err);
})

fs.appendFile('User/bio.txt', '\nskills - HTML, CSS, JS, React', (err) => {
    if (err)
        console.log(err);
})

fs.readFile('User/bio.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err);

    console.log(data);
})

fs.rename('User/bio.txt', 'User/biorenamed.txt', (err) => {

})
fs.unlink('./User/biorenamed.txt', (err) => {
    console.log('file delete');
})


fs.rmdir('User', (err) => {

})

//in the above async fns which run asyncly the main thread is not blcoked so they may simultaneously get executed
//in order to preserve order we should write each fn within callback of previous
//or to test each comment each and test each