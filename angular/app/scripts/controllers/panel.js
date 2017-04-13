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

        const changeSideNav = function (open, flex, fledLg, flexGxLg, mobile)
        {
            $scope.sidenav = {
                open    : open,
                mobile  : mobile,
                flex    : flex,
                flexLg  : fledLg,
                flexGtLg: flexGxLg
            };
        };

        changeSideNav(true, 5, 15, 10, false);

        $scope.$watch(function ()
                      {
                          return $mdMedia('gt-md');
                      }, function (show)
                      {
                          changeSideNav(show, 5, 15, 10, false);
                      });

        $scope.$watch(function ()
                      {
                          return $mdMedia('xs');
                      }, function (show)
                      {
                          if (show)
                          {
                              changeSideNav(false, 0, 0, 0, true);
                          }
                          else if ($scope.sidenav.mobile)
                          {
                              changeSideNav(false, 5, 5, 5, false);
                          }
                      });

        $scope.menu = function ()
        {
            if ($scope.sidenav.open)
            {
                changeSideNav(false, 5, 5, 5, false);
            }
            else
            {
                changeSideNav(true, 5, 15, 10, false);
            }
        };
    });
