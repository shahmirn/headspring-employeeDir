angular.module('hs.services', ['ngResource']).factory('Employee', function($resource) {

    var transformRequest = function(data) {
        if (data && data.phoneNumbers && typeof data.phoneNumbers === "string") {
            data.phoneNumbers = data.phoneNumbers.replace(/\s/g, '').split(",");
        }

        return angular.toJson(data);
    };

    return $resource('api/employees/:employeeId', {employeeId: '@_id'}, {
        'save': {
            method: 'POST',
            transformRequest: transformRequest
        },
        'update': {
            method:'PUT',
            transformRequest: transformRequest
        }
    });
}).factory('Login', function($resource) {
    return $resource('api/login/:loginId');
});