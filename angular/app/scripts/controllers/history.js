'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('HistoryCtrl', function ($scope, $http)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        const _init = function ()
        {
            $http({
                      method: 'GET',
                      url   : 'http://beta.json-generator.com/api/json/get/4yLebAxTM'
                  }).then(function (success)
                          {
                              $scope.tableFiles = success.data;
                          });

            $scope.filter = {};

            $scope.query = {
                order : 'age',
                filter: '',
                limit : 3,
                page  : 1
            };
        };


        $scope.reOrder = function (order)
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

        $scope.changeView = function (tableFile)
        {
            console.log(tableFile);
            if (tableFile.expanded) {
                tableFile.expanded = false;
            }
            else {
                tableFile.expanded = true;
            }
        };

        $scope.showView = function (tableFile, $index)
        {
            return ($index === 0 || tableFile.expanded);
        };

        _init();
    });
