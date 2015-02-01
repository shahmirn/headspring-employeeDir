'use strict';

var Employee = require('./employee.model');

exports.index = function(req, res, next) {

    Employee.find(req.db, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.show = function(req, res) {
    Employee.findById(req.db, req.params.id, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.create = function(req, res) {
    if (!req.isAuthenticated()) {
        return handleError(res, null, 401);
    }

    delete req.body._id;
    delete req.body.name;

    Employee.create(req.db, req.body, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.update = function(req, res) {
    if (!req.isAuthenticated()) {
        return handleError(res, null, 401);
    }

    delete req.body._id;
    delete req.body.name;

    Employee.update(req.db, req.params.id, req.body, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.destroy = function(req, res) {
    if (!req.isAuthenticated()) {
        return handleError(res, null, 401);
    }

    Employee.destroy(req.db, req.params.id, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            console.log(result);
            return res.status(204).send();
        }
    });
};

function handleError(res, err, status) {
    console.log(err);
    return res.status(status).send(err);
}
