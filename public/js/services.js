angular.module('hs.services', ['ngResource']).factory('Employee', function($resource) {
    return $resource('api/employees/:employeeId', {employeeId: '@_id'}, {
        'update': {
            method:'PUT',
            transformRequest: function(data) {
                if (data && data.phoneNumbers && typeof data.phoneNumbers === "string") {
                    data.phoneNumbers = data.phoneNumbers.replace(/\s/g, '').split(",");
                }

                return angular.toJson(data);
            }
        }
    });
}).factory('Login', function($resource) {
    return $resource('api/login/:loginId');
});