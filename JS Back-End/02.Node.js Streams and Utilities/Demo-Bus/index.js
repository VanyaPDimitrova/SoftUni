const { start: startSubscriber } = require('./subscriber');
const { start: startSubscriber2 } = require('./subscriber2');
const { start: startPublisher } = require('./publisher');

function start() {
    startSubscriber();
    startSubscriber2();
    startPublisher();
}

start();
