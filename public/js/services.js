angular.module('hs.services', ['ngResource']).factory('Employee', function($resource) {
  return $resource('api/employees/:employeeId')
});