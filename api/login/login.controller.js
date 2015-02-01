'use strict';

var crypto = require('crypto'),
    Login = require('./login.model');;

exports.makeSalt = function() {
    //From: http://stackoverflow.com/questions/11520126/how-to-create-random-salt-hash-with-crypto
    return crypto.randomBytes(256).toString('base64');
};

var createPassword = function(password, salt) {
    //From: https://github.com/madhums/node-express-mongoose-demo/blob/master/app/models/user.js
    if (!password) {
        return '';
    }
    try {
      return crypto
        .createHmac('sha512', salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
};
exports.createPassword = createPassword;

var validPassword = function(user, plainPassword) {
    return user.password === createPassword(plainPassword, user.salt);
};
exports.validPassword = validPassword;

exports.loginRes = function(req, res) {
    res.json();
};