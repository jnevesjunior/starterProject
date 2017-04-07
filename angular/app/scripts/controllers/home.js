'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('HomeCtrl', function ($mdSidenav) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
