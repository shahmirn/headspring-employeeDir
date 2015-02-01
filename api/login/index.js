'use strict';

var passport = require('passport'),
    controller = require('./login.controller');

module.exports = function(app) {
    app.post('/api/login', passport.authenticate('local'), controller.loginRes);
}