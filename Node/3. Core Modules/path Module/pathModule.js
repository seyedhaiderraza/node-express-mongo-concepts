const path = require('path')

const path = require('path')

let staticPath = __dirname
staticPath = path.join(staticPath, '../public')
console.log(staticPath);
console.log(path.dirname('D:/study/code repositories/Node Express Mongo/node-express-mongo-concepts/3. Core Modules/path Module/pathModule.js'));

console.log(path.extname('D:/study/code repositories/Node Express Mongo/node-express-mongo-concepts/3. Core Modules/path Module/pathModule.js'));

console.log(path.basename('D:/study/code repositories/Node Express Mongo/node-express-mongo-concepts/3. Core Modules/path Module/pathModule.js'));

console.log(path.parse('D:/study/code repositories/Node Express Mongo/node-express-mongo-concepts/3. Core Modules/path Module/pathModule.js'));
const myPath = path.parse('D:/study/code repositories/Node Express Mongo/node-express-mongo-concepts/3. Core Modules/path Module/pathModule.js');

console.log(myPath.ext)
console.log(myPath.root);