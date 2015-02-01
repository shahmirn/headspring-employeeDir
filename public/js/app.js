'use strict';

angular.module('hs', [
  'ui.router',
  'ui.grid',
  'ui.grid.pagination',
  'toaster',
  'hs.controllers',
  'hs.services'
]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state("home", {
    url: "/",
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  });

  $stateProvider.state("login", {
    url: "/login",
    templateUrl: 'partials/login.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  });

  $stateProvider.state("logout", {
    url: "/logout",
    controller: 'LogoutController'
  });
});