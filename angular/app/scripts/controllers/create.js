'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('CreateCtrl', function ($scope, $mdToast, simpleToast)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.submitUser = function (user)
        {
            if (user === undefined || Object.keys(user).length !== 4)
            {
                simpleToast.show('All fields are required!');
                return false;
            }

            if (user.password !== user.password2)
            {
                simpleToast.show('Sorry, passwords must be equals.');
            }
        }
    });
