const fs = require('fs')

//writeFile
//fs.writeFile('dummyFile.txt', 'test async data fs module') //error The "cb" argument must be of type function. Received undefined
fs.writeFile('dummyFile.txt', 'test async data fs module', (err) => {

    //callback called after main task completes
    //can do anything here in callback
    if (err)
        console.log(err);
})

//appendFile
fs.appendFile('dummyFile.txt', '\ntest append async data fs module', (err) => {

    //callback called after main task completes
    //can do anything here in callback
    if (err)
        console.log(err);
})

//readFile
fs.readFile('dummyFile.txt', 'utf8', (err, data) => {

    console.log(data);


})