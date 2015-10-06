'use strict';

module.exports = angular.module('migrateApp', [
    'ngAnimate',
    //'ngCookies',
    'ngResource',
    'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'suggestionModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
