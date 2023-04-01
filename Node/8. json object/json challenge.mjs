//create a user object with name, age, address, profession, savings
//convert to json -> write to a file -> read file-> convert from json to object->log

import fs from 'fs'
import chalk from 'chalk'
const userData = {
    name: 'George',
    age: 20,
    address: '123 Washington street, Kolhapur',
    profession: 'Doctor',
    savings: '3000$'
}

const userDataJson = JSON.stringify(userData) //object to JSON String

fs.writeFileSync('userData.txt', userDataJson)
const jsonReadData = fs.readFileSync('userData.txt', 'utf-8') //utf-8 for converting buffer binary data into string format
console.log('Json represent: ', chalk.blue.inverse(jsonReadData));

const objectData = JSON.parse(jsonReadData) //JSON String to object

console.log('Object represent: ', objectData);