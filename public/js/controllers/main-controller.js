angular.module('hs.controllers').controller('MainController', function($scope, cfpLoadingBar) {
  $scope.model = {};
  $scope.show = {
    loading: false
  };

  $scope.cfpLoadingBar = cfpLoadingBar;
});