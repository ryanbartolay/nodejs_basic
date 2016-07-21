// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


// Bind event and even handler as follows
eventEmitter.on('eventName', eventHandler);