'use strict';

angular.module('ngFrontApp').controller('NavigationController', function ($scope, $location) {
  $scope.isActive = function(path) {
    return path === $location.path();
  };
})
