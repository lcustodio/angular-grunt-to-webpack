'use strict';

require('../vendor.js')();

var appModule = angular.module('dashboard', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'dashboard/dashboard.html',
                controller: 'MainCtrl',
                controllerAs: 'dashboard'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name]);
});

require('./dashboard');