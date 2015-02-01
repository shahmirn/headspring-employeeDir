'use strict';

var passport = require('passport'),
    controller = require('./login.controller');

module.exports = function(app) {

    app.get('/api/login', function(req, res) {
        if (req.isAuthenticated()) {
            res.status(200).send();
        } else {
            res.sendStatus(401);
        }
    });

    app.post('/api/login', passport.authenticate('local'), controller.loginRes);

    app.delete('/api/login', function(req, res){
      req.logOut();
      res.status(200).send();
    });

    // app.get('/loggedin', function(req, res) {
    //     res.send(req.isAuthenticated() ? req.user.username : '0');
    // });
}