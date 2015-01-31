'use strict';

var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

exports.index = function(req, res, next) {

    req.db.employees.find({}).toArray(function(err, result) {
        if (err) {
            handleError(res, err);
        } else {
            result = _.chain(result).map(function(employee) {
                employee.name = employee.firstName + ' ' + employee.lastName;
                return employee;
            }).sortBy(function(employee) {
                return employee.name;
            }).value();

            return res.status(200).json(result);
        }
    });
};

function handleError(res, err) {
    console.log(err);
    return res.status(500).send(err);
}
