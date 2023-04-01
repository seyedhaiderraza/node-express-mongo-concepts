const eventE = require("events")

//create new event
const event = new eventE()

event.on('displayMessage', () => { //event listener
    console.log('Event triggered message displayed');
})

event.on('displayMessage', () => { // same named event with different callbacks
    console.log('Event triggered Name displayed: aaa');
})
event.on('displayMessage', () => { // same named event with different callbacks
    console.log('Event triggered Age displayed: 11');
})

event.emit('displayMessage') //named event