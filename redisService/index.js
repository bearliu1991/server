const expireTime = require('../config/session.config.js').cookie.maxAge / 1000;

var redis = require("redis"),
    client = redis.createClient({
        "host": "192.168.0.240",
        "port": "6379",
        "password": "123456",
        "db": 1,
        'prefix': "node_session"
        });

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = {
    client: client,
    setKey: function name(key, data) {
        client.set('<' + key + '>', JSON.stringify(data));
        // if (expires) {
        client.expire('<' + key + '>', expireTime);
        // }
    },
    setExpire: function name(key, expires) {
        // expires: second
        client.expire('<' + key + '>', expires);
    },
    getKey: function name(key, fn) {
        // expires: second
        return client.get('<' + key + '>', function (err, status) {
            if (typeof fn === "function") {
                fn(err, status)
            }
        });
    },
}
