'use strict';

angular.module('hs', [
  'ui.router',
  'ui.grid',
  'ui.grid.pagination',
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
});