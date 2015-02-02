'use strict';

angular.module('hs', [
  'ui.router',
  'ui.grid',
  'ui.grid.pagination',
  'toaster',
  'ngAnimate',
  'angular-loading-bar',
  'hs.controllers',
  'hs.services'
]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state("home", {
    url: "/",
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  }).state("viewEmployee", {
    url: "/employee/:id",
    templateUrl: 'partials/view-employee.html',
    controller: 'ViewEmployeeController',
    controllerAs: 'viewEmployeeCtrl'
  }).state("addEmployee", {
    url: "/addEmployee",
    templateUrl: 'partials/add-edit-employee.html',
    controller: 'AddEmployeeController',
    controllerAs: 'addEditEmployeeCtrl'
  }).state("editEmployee", {
    url: "/editEmployee/:id",
    templateUrl: 'partials/add-edit-employee.html',
    controller: 'EditEmployeeController',
    controllerAs: 'addEditEmployeeCtrl'
  }).state("login", {
    url: "/login",
    templateUrl: 'partials/login.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  });
}).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeBar = false;
}]);