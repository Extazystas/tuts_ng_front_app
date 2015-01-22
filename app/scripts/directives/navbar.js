'use strict';

angular.module('ngFrontApp').directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  }
});
