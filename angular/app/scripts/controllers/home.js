'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('HomeCtrl', function ($scope, $http)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.selected = [];

        $scope.query = {
            order: 'age',
            limit: 10,
            page: 1
        };

        function success(desserts) {
            $scope.desserts = desserts;
            console.log(desserts)
        }

        $scope.getDesserts = function (order) {
            $scope.promise = {};
            // $scope.promise = pegar().$promise;
            // $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
            console.log('Scope Order: ',$scope.query);
            console.log('Order: ', order);
            console.log('Order: ', $scope.tableItens.data.length);
        };




        function pegar()
        {
            $http({
                      method: 'GET',
                      url   : 'http://beta.json-generator.com/api/json/get/4yLebAxTM'
                  }).then(function (success)
                          {
                              $scope.tableItens = success;
                          }, function (error)
                          {

                          });
        }

        pegar();
    });
