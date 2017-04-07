'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
    .module('angularApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial'
    ])
    .config(function ($routeProvider)
            {
                $routeProvider
                    .when('/', {
                        templateUrl : 'views/main.html',
                        controller  : 'MainCtrl',
                        controllerAs: 'main'
                    })
                    .when('/about', {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutCtrl',
                        controllerAs: 'about'
                    })
                    .otherwise({
                                   redirectTo: '/'
                               });
            })
    .config(function ($mdThemingProvider)
            {
                $mdThemingProvider.theme('default')
                    .primaryPalette('blue', {
                        'default': '900'
                    });
                $mdThemingProvider.theme('green')
                    .primaryPalette('green');
            });
