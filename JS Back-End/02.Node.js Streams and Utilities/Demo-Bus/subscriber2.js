const { subscribe } = require('./bus');

function start() {
    subscribe('login', onMessage);
}

function onMessage(data) {
    console.log('Second subscriber receiving message: ', data);
}

module.exports = {
    start
}