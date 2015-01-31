'use strict';

var express = require('express'),
    mongoskin = require('mongoskin');

var app = express();

//Based on http://webapplog.com/todo-app-with-express-jsnode-js-and-mongodb/
var db = require('mongoskin').db('mongodb://localhost:27017/headspring?auto_reconnect', {safe:true});

app.use(function(req, res, next) {
  req.db = {};
  req.db.employees = db.collection('employees');
  next();
});

var port = 3001;
 
app.listen(port, function() {
    console.log("Express server listening on port " + port);
});

//Based on https://github.com/DaftMonk/fullstack-demo
require('./routes')(app);