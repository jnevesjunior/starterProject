'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('DashboardCtrl', function ($scope)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.graphHour = {
            labels: ["0", "10", "20", "30", "40", "50", "60"],
            data  : [30, 50, 10, 30, 20, 10, 9]
        };
        $scope.graphDay = {
            labels: ["0", "10", "20", "30", "40", "50", "60", "0", "10", "20", "30", "40", "50", "60", "0", "10", "20", "30", "40", "50", "60", "77", "22", "22"],
            data  : [10, 10, 10, 30, 20, 10, 9, 30, 40, 10, 30, 20, 10, 9, 30, 40, 10, 30, 20, 10, 9, 9, 9, 9]
        };
        $scope.graphWeek = {
            labels: ["Seg", "10", "20", "30", "40", "50", "60"],
            data  : [30, 50, 10, 30, 20, 10, 9]
        };

        $scope.onClick = function (points, evt)
        {
            console.log(points, evt);
        };
    });
