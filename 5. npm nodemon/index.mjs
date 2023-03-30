import chalk from 'chalk'
import validator from 'validator'


console.log(chalk.blue('hello'), chalk.green('world') + chalk.yellow(' learning node express mongoDB'));
const randomStr = 'Hello world I am dude'
const subStr = 'dude'
const invalidSubStr = 'Wassup'
const flag = validator.contains(randomStr, subStr)
console.log(` ${randomStr} contains ${subStr} string ?`, flag ? chalk.green.inverse('true') : chalk.red.inverse('false'));

/*
npm i -g nodemon
to test - > nodemon index.mjs prevents app restarts

const flag2 = validator.contains(randomStr, invalidSubStr)
console.log(` ${randomStr} contains ${invalidSubStr} string ?`, flag2 ? chalk.green.inverse('true') : chalk.red.inverse('false'));

*/
//use case
const emailValid = validator.isEmail('foo@Bar.com')

const emailValid2 = validator.isEmail('fooBar.com')
console.log(`foo@bar.com is valid email? `, emailValid ? chalk.green.inverse('true') : chalk.red.inverse('false'));

console.log(`foobar.com is valid email? `, emailValid2 ? chalk.green.inverse('true') : chalk.red.inverse('false'));