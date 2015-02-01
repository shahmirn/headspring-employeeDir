var _ = require('underscore');

var employeeNameMapFn = function(employee) {
    employee.name = employee.firstName + ' ' + employee.lastName;
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
    })
};