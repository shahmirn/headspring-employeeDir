angular.module('hs.controllers').controller('ViewEmployeeController', function($state, Employee, toaster) {
    this.employee = Employee.get({employeeId: $state.params.id});

    this.deleteEmployee = function() {
        this.employee.$delete(function() {
            toaster.pop('success', null, "Deleted employee successfully!");
            $state.go('home');
        }, function() {
            toaster.pop('error', null, "Failed to delete employee");
        });
    };
});