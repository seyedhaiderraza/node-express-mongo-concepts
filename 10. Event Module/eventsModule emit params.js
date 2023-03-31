const eventE = require("events")

//create new event
const event = new eventE()

event.on('checkPage', (status, message) => { //event listener
    console.log(`Page status is ${status} and the message is ${message}`);
})

event.emit('checkPage', 200, 'ok') //named event