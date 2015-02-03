angular.module('hs.controllers').controller('LoginController', function($scope, $state, Login, toaster) {
  this.login = function() {
    Login.save({username: this.username, password: this.password}, function() {
      toaster.pop('success', null, "Signed in successfully!");
      $scope.model = $scope.model || {};
      $scope.model.showAdminControls = true;
      $state.go('home');
    }, function() {
      toaster.pop('error', null, "Sign in failed.");
    });
  };
});