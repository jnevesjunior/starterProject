'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('UploadCtrl', function ($scope, FileUploader)
    {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.uploader = new FileUploader();

        $scope.teste = function (teste)
        {
            console.log(teste.queue.length);
            return teste.queue.length > 0;
        }
    });