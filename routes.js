var express = require('express'),
    path = require('path');

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/api/employees', require('./api/employee'));
}