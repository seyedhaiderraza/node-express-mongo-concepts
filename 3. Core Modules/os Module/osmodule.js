//OS architecture (32 or 64 bit)
//OS Platform, Hostname, Temp folder dir, total RAM, free RAM
const os = require('os')

console.log(`OS architecture - ${os.arch()}`);

console.log(`OS Platform - ${os.platform()}`);

console.log(`OS hostname - ${os.hostname()}`);


console.log(`OS temp folder directory path - ${os.tmpdir()}`);

console.log(` total RAM - ${(os.totalmem()/1024/1024/1024).toFixed(2)}GB`);

console.log(` Free RAM - ${(os.freemem()/1024/1024/1024).toFixed(2)}GB`);