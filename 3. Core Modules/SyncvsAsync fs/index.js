const fs = require('fs')


//Sync read one by one till one completes
const data = fs.readFileSync('bio.txt', 'utf-8')
console.log(data);
console.log('>>>>>>>>>>>after sync read file log console<<<<<<<<<<<');

fs.readFile('bio.txt', 'utf-8', (er, data) => {
    console.log(data); // prints after  console log outside this function below

})
console.log('>>>>>>>>after async readfile function<<<<<<<<<<'); // prints first before async readfile data log