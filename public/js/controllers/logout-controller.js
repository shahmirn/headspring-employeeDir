angular.module('hs.controllers').controller('LogoutController', function($scope, $state, Login, toaster) {
  this.logout = function() {
    Login['delete'](function() {
      toaster.pop('success', null, "Signed out successfully!");
      $scope.model.showAdminControls = false;
      $state.go('home');
    }, function() {
    });
  };

  this.logout();
});