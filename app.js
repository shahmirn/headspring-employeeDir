'use strict';

var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    compression = require('compression'),
    passport = require('passport'),
    mongoskin = require('mongoskin');

var app = express();
app.use(compression({
  threshold: 512
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Based on http://webapplog.com/todo-app-with-express-jsnode-js-and-mongodb/
// and http://www.hacksparrow.com/mongoskin-tutorial-with-examples.html
var db = require('mongoskin').db('mongodb://localhost:27017/headspring?auto_reconnect', {safe:true});
app.db = {};
app.db.employees = db.collection('employees');
app.db.login = db.collection('login');

app.use(function(req, res, next) {
  req.db = app.db;
  next();
});

var port = 3001;
 
app.listen(port, function() {
    console.log("Express server listening on port " + port);
});

//Based on https://github.com/DaftMonk/fullstack-demo
require('./routes')(app);

require('./passport')(app);
