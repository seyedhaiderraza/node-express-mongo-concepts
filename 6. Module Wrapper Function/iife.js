//automatically invoked function without calling them

(function() {
    let a = 'apple'
    console.log(a);
})()

//above is same as below without iife construct

let a = 'apple'
console.log(a);

//environment variables
console.log(__dirname);

console.log(__filename);