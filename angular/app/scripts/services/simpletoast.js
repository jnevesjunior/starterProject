'use strict';

/**
 * @ngdoc service
 * @name angularApp.simpleToast
 * @description
 * # simpleToast
 * Factory in the angularApp.
 */
angular.module('angularApp')
    .factory('simpleToast', function ($mdToast)
    {
        return {
            show: function (message)
            {
                $mdToast.show($mdToast.simple()
                                  .textContent(message)
                                  .position('top right'));
            }
        };
    });
