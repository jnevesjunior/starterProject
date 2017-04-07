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
        'ngMaterial',
        'md.data.table'
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
                    .when('/home', {
                      templateUrl: 'views/home.html',
                      controller: 'HomeCtrl',
                      controllerAs: 'home'
                    })
                    .otherwise({
                                   redirectTo: '/'
                               });
            })
    .config(function ($mdThemingProvider)
            {
                $mdThemingProvider.theme('default')
                    .primaryPalette('green');
                $mdThemingProvider.theme('jnj')
                    .primaryPalette('red', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('positive')
                    .primaryPalette('blue', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('negative')
                    .primaryPalette('red', {
                        'default': 'A700'
                    });
            });
