angular.module('hs.controllers').controller('MainController', function($scope, Login, toaster) {
  $scope.model = {};

  Login.query(function() {
    $scope.model.showAdminControls = true;
  }, function() {
    $scope.model.showAdminControls = false;
  });

  this.logout = function() {
    Login['delete'](function() {
        toaster.pop('success', null, "Signed out successfully!");
        $scope.model.showAdminControls = false;
    }, function() {
        toaster.pop('error', null, "Failed to sign out.");
    });
  };
});