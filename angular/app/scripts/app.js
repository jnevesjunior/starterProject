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
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'md.data.table'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider)
            {
                $stateProvider
                    .state('login', {
                        url         : '/',
                        templateUrl : 'views/login.html',
                        controller  : 'LoginCtrl',
                        controllerAs: 'login'
                    })
                    .state('panel', {
                        url         : '/panel',
                        templateUrl : 'views/panel.html',
                        controller  : 'PanelCtrl',
                        controllerAs: 'panel'
                    })
                    .state('panel.home', {
                        url         : '/home',
                        templateUrl : 'views/home.html',
                        controller  : 'HomeCtrl',
                        controllerAs: 'home'
                    })
                    .state('panel.history', {
                        url         : '/history',
                        templateUrl : 'views/history.html',
                        controller  : 'HistoryCtrl',
                        controllerAs: 'history'
                    });

                $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode(true);
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
