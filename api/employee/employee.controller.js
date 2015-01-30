'use strict';

var fs = require('fs'),
    path = require('path');

exports.index = function(req, res) {
  fs.readFile(path.normalize('./json/sample-employee.json'), 'utf8', function(err, data) {
    res.send(data);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}