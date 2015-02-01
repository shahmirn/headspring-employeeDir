var _ = require('underscore');

var employeeNameMapFn = function(employee) {
    if (employee) {
        employee.name = employee.firstName + ' ' + employee.lastName;
    }
    return employee;
};

exports.find = function(db, callback) {
    db.employees.find({}).toArray(function(err, result) {
        if (err) {
            callback(err);
        } else {
            result = _.chain(result).map(employeeNameMapFn).sortBy(function(employee) {
                return employee.name;
            }).value();

            callback(null, result);
        }
    });
};

exports.findById = function(db, id, callback) {
    db.employees.findById(id, function(err, result) {
        if (err) {
            callback(err);
        } else {
            result = employeeNameMapFn(result);
            callback(null, result);
        }
    });
};

exports.create = function(db, data, callback) {
    db.employees.insert(data, function(err, result) {
        if (err) {
            callback(err);
        } else {
            result[0] = employeeNameMapFn(result[0]);
            callback(null, result[0]);
        }
    });
};

exports.update = function(db, id, data, callback) {
    db.employees.updateById(id, {$set: data}, function(err, result) {
        if (err) {
            callback(err);
        } else {
            exports.findById(db, id, callback);
        }
    });
};

exports.destroy = function(db, id, callback) {
    db.employees.removeById(id, function(err, count) {
        if (err) {
            callback(err);
        } else if (count === 0) {
            callback("No results");
        } else {
            callback(null, count);
        }
    });
};