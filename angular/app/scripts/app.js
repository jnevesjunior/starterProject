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
        'md.data.table',
        'angularFileUpload',
        'materialCalendar'
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
                    .state('create', {
                        url         : '/create',
                        templateUrl : 'views/create.html',
                        controller  : 'CreateCtrl',
                        controllerAs: 'create'
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
                    })
                    .state('panel.upload', {
                        url         : '/upload',
                        templateUrl : 'views/upload.html',
                        controller  : 'UploadCtrl',
                        controllerAs: 'upload'
                    })
                    .state('panel.calendar', {
                        url         : '/calendar',
                        templateUrl : 'views/calendar.html',
                        controller  : 'CalendarCtrl',
                        controllerAs: 'calendar'
                    });
                $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode(true);
            })
    .config(function ($mdThemingProvider)
            {
                $mdThemingProvider.theme('default')
                    .primaryPalette('red', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('jnj')
                    .primaryPalette('red', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('link')
                    .primaryPalette('blue', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('positive')
                    .primaryPalette('green');
                $mdThemingProvider.theme('warn')
                    .primaryPalette('yellow', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('negative')
                    .primaryPalette('red', {
                        'default': 'A700'
                    });
                $mdThemingProvider.theme('background')
                    .primaryPalette('grey', {
                        'default': '50'
                    });
            });
