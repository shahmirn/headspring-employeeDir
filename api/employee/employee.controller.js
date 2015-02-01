'use strict';

var Employee = require('./employee.model');

exports.index = function(req, res, next) {

    Employee.find(req.db, function(err, result) {
        if (err) {
            handleError(res, err);
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.show = function(req, res) {
    Employee.findById(req.db, req.params.id, function(err, result) {
        if (err) {
            handleError(res, err);
        } else {
            return res.status(200).json(result);
        }
    });
};

function handleError(res, err) {
    console.log(err);
    return res.status(500).send(err);
}
