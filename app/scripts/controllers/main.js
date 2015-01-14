'use strict';

/**
 * @ngdoc function
 * @name ngFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFrontApp
 */
angular.module('ngFrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
