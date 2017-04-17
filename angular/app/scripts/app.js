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
                    .state('home', {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeCtrl',
                        controllerAs: 'home'
                    })
                    .state('home.login', {
                        url         : '/',
                        templateUrl : 'views/login.html',
                        controller  : 'LoginCtrl',
                        controllerAs: 'login'
                    })
                    .state('home.create', {
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
                    .state('panel.table', {
                        url         : '/table',
                        templateUrl : 'views/table.html',
                        controller  : 'TableCtrl',
                        controllerAs: 'table'
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
                    })
                    .state('panel.users', {
                        url         : '/users',
                        templateUrl : 'views/users.html',
                        controller  : 'UsersCtrl',
                        controllerAs: 'users'
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
                $mdThemingProvider.theme('waiting-card')
                    .primaryPalette('orange')
                    .backgroundPalette('orange').dark();
                $mdThemingProvider.theme('approved-card')
                    .primaryPalette('green')
                    .backgroundPalette('green').dark();
                $mdThemingProvider.theme('denied-card')
                    .primaryPalette('red')
                    .backgroundPalette('red').dark();
            });
