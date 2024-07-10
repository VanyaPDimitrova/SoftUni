let subscribers = [];

function subscribe(callback) {
    subscribers.push(callback);
};

function publish(message) {
    for (const subscriber of subscribers) {
        console.log('Dispatching messages');
        subscriber(message);
    }
};

module.exports = {
    subscribe,
    publish
};
