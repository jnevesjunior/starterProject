'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('CalendarCtrl', function ($scope, $filter)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.selectedDate = new Date();
        $scope.dayFormat = "d";
        $scope.firstDayOfWeek = 0;

        $scope.setDirection = function (direction)
        {
            $scope.direction = direction;
            $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
        };

        $scope.dayClick = function (date)
        {
            $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
        };

        $scope.prevMonth = function (data)
        {
            $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
        };

        $scope.nextMonth = function (data)
        {
            $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
        };

        $scope.tooltips = true;
        $scope.setDayContent = function (date)
        {
            return "Files submitted";
        };
    });
