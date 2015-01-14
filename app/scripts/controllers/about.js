'use strict';

/**
 * @ngdoc function
 * @name ngFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngFrontApp
 */
angular.module('ngFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
