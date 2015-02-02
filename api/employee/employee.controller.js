'use strict';

var fs = require('fs'),
    path = require('path'),
    Employee = require('./employee.model');

var unauthorizedError = {"error": 401};

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

exports.update = function(req, res) {
    res.setHeader('Content-Type', 'text/html');

    if (!req.isAuthenticated()) {
        return handleError(res, unauthorizedError, 401);
    }

    delete req.body._id;
    delete req.body.name;

    req.body = handlePhoneNumbers(req.body);

    if (req.files && 
        req.files.picture && 
        getFileSize(req.files.picture.file)
    ) {
        req.body.picture = handlePicture(req, req.params.id);
    }

    Employee.update(req.db, req.params.id, req.body, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            return res.status(200).send();
        }
    });
};

exports.create = function(req, res) {
    // Based on https://github.com/twilson63/ngUpload/tree/master/examples/nodejs
    res.setHeader('Content-Type', 'text/html');

    if (!req.isAuthenticated()) {
        return handleError(res, unauthorizedError, 401);
    }

    delete req.body._id;
    delete req.body.name;

    req.body = handlePhoneNumbers(req.body);

    Employee.create(req.db, req.body, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            if (req.files && 
                req.files.picture && 
                getFileSize(req.files.picture.file)
            ) {
                var newName = handlePicture(req, result._id);
                Employee.update(req.db, result._id, {'picture':newName}, function(err, result) {
                    if (err) {
                        handleError(res, err, 500);
                    } else {
                        return res.status(201).send();
                    }
                });
            } else {
                return res.status(201).send();
            }
        }
    });
};

exports.destroy = function(req, res) {
    if (!req.isAuthenticated()) {
        return handleError(res, unauthorizedError, 401);
    }

    Employee.destroy(req.db, req.params.id, function(err, result) {
        if (err) {
            handleError(res, err, 500);
        } else {
            return res.status(204).send();
        }
    });
};

function handleError(res, err, status) {
    console.log(err);
    return res.status(status).send(err);
}

function getFileSize(file) {
    var stats = fs.statSync(file);
    return stats["size"];
}

function handlePicture(req, id) {
    var picture = req.files.picture;
    var extension = picture.filename.split(".").reverse()[0];
    var newName = 'avatars/avatar-' + id + '.' + extension;
    var newPath = path.join(
        __dirname, 
        '../../public/' + newName
    );

    fs.renameSync(picture.file, newPath);

    return newName;
}

function handlePhoneNumbers(body) {
    if (body && body.phoneNumbers && typeof body.phoneNumbers === "string") {
        body.phoneNumbers = body.phoneNumbers.replace(/\s/g, '').split(",");
    }

    return body;
}