angular.module('hs.services', ['ngResource']).factory('Employee', function($resource) {
  return $resource('api/employees/:employeeId')
}).factory('Login', function($resource) {
  return $resource('api/login/:employeeId', null, {
    'validate': {
        method: 'POST'
    }
  })
});