angular.module('hs.services', ['ngResource']).factory('Employee', function($resource) {
    return $resource('api/employees/:employeeId', {employeeId: '@_id'});
}).factory('Login', function($resource) {
    return $resource('api/login/:loginId');
});