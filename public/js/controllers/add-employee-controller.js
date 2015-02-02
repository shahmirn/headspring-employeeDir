angular.module('hs.controllers').controller('AddEmployeeController', function($state, Employee, toaster) {
    this.title = "Add Employee";

    this.action = "/api/employees";

    // this.save = function() {
    //     var newEmployee = new Employee(this.employee);
    //     newEmployee.$save(function() {
    //         toaster.pop('success', null, "Added employee successfully!");
    //         $state.go('home');
    //     }, function() {
    //         toaster.pop('error', null, "Failed to add employee");
    //     })
    // };

    this.uploadComplete = function (content) {
        if (content && content.error) {
            toaster.pop('error', null, "Failed to add employee");
        } else {
            toaster.pop('success', null, "Added employee successfully!");
            $state.go('home');
        }
    };
});