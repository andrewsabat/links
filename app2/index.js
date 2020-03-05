console.log(1);
const signalhub = require('signalhub');
const hub = signalhub('my-web', [
    'http://localhost:8080'
]);

const users = {};
const User = require("./User.js");
const you = new User();

hub.subscribe('update').on('data', function (data) {
    console.log(data);
    console.log(you);
    if (!users[data]) {
        users[data] = new User();
    }

});

setInterval(function () {
    hub.broadcast('update', you)
}, 1000);