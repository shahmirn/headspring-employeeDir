angular.module('hs.controllers').controller('EditEmployeeController', function($state, Employee, toaster) {
    var self = this;
    Employee.get({employeeId: $state.params.id}, function(employee) {
        self.employee = employee;
        self.title = "Edit Employee " + employee.name;
    });

    this.save = function() {
        this.employee.$update(function() {
            toaster.pop('success', null, "Edited employee successfully!");
            $state.go('home');
        }, function() {
            toaster.pop('error', null, "Failed to edit employee");
        });
    };
});