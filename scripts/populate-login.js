var db = require('mongoskin').db('mongodb://localhost:27017/headspring?auto_reconnect', {safe:true});
var login = db.collection('login');

var ctrl = require('../controllers/login.js')

var salt = ctrl.makeSalt();
var password = ctrl.createPassword("admin", salt);

login.remove({}, function(err, result) {
    if (err) throw err;
    if (result) console.log('Removed all logins!');

    console.log("Populating login...");

    login.insert({
        "username": "admin",
        "password": password,
        "salt": salt
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log("Done!");
            process.exit();
        }
    });
});