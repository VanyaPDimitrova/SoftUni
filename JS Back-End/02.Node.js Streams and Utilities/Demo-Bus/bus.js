let subscribers = {};

// type is type of event
function subscribe(type, callback) {
    if (!subscribers[type]) {
        subscribers[type] = [];
    }

    subscribers[type].push(callback);
};

function publish(type, message) {
    if (!subscribers[type]) {
        return;
    }

    for (const subscriber of subscribers[type]) {
        console.log('Dispatching messages', type);
        subscriber(message);
    }
};

module.exports = {
    subscribe,
    publish
};
