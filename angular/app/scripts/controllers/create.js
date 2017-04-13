'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('CreateCtrl', function ($scope, $mdToast)
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
                const toast = $mdToast.simple()
                    .textContent('All fields are required!')
                    .position('top right');

                $mdToast.show(toast);
                return false;
            }

            if (user.password !== user.password2)
            {

                const toast = $mdToast.simple()
                    .textContent('Sorry, passwords must be equals.')
                    .position('top right');

                $mdToast.show(toast);

            }
        }
    });
