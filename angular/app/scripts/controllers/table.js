'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('TableCtrl', function ($scope, $http)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.selected = [];
        $scope.filter = {};

        $scope.query = {
            order : 'age',
            filter: '',
            limit : 5,
            page  : 1
        };

        $scope.getDesserts = function (order)
        {
            $scope.promise = {};
            $scope.query.order = order;
        };

        $scope.showFilter = function ()
        {
            $scope.filter.show = true;
        };

        $scope.removeFilter = function ()
        {
            $scope.query.filter = '';
            $scope.filter.show = false;
        };

        function pegar()
        {
            $http({
                      method: 'GET',
                      url   : 'http://beta.json-generator.com/api/json/get/4yLebAxTM'
                  }).then(function (success)
                          {
                              $scope.tableItens = success;
                          });
        }

        pegar();
    });
