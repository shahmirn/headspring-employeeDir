angular.module('hs.controllers').controller('ViewEmployeeController', function($state, Employee) {
    
    this.employee = Employee.get({employeeId: $state.params.id}, function(res) {
        
    });
});