const eventE = require("events")

//create new event
const event = new eventE()

event.on('displayMessage', () => { //event listener
    console.log('Event triggered message displayed');
})

event.emit('displayMessage') //named event