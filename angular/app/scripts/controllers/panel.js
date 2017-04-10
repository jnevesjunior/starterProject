'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('PanelCtrl', function ($scope, $mdMedia)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.$watch(function ()
                      {
                          return $mdMedia('gt-md');
                      }, function (show)
                      {
                          $scope.sidenav.open = show;
                      });

        $scope.sidenav = {
            open: true,
            flex: 5,
            flexLg: 15,
            flexGtLg: 10
        };

        $scope.menu = function ()
        {
            if ($scope.sidenav.open)
            {
                $scope.sidenav.open = false;
                $scope.sidenav.flex = 5;
                $scope.sidenav.flexLg = 5;
                $scope.sidenav.flexGtLg = 5;
            }
            else
            {
                $scope.sidenav.open = true;
                $scope.sidenav.flex = 5;
                $scope.sidenav.flexLg = 15;
                $scope.sidenav.flexGtLg = 10;
            }
            console.log($scope.sidenav);
        }
    });
