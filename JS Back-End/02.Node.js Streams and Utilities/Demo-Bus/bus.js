let subscribers = {};

// type is type of event
function subscribe(type, callback) {
    if (!subscribers[type]) {
        subscribers[type] = [];
    }

    subscribers[type].push(callback);
};

function unsubscribe(type, callback) {
    if (!subscribers[type]) {
        return;
    }

    console.log('Removing subscriber');
    const index = subscribers[type].indexOf(callback);
    subscribers[type].splice(index, 1);
}

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
    unsubscribe,
    publish
};
