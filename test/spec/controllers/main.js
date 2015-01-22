'use strict';

describe('Controller: MainCtrl', function () {
  var location, scope;

  beforeEach(module('ngFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope;
    $controller('NavigationController', {
      $scope: scope
    });
  }));

  describe('isActive', function() {
    it('returns true when paths are the same', function() {
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });

    it('returns false when path are different', function() {
      location.path('/wrong');
      expect(scope.isActive('/test')).toBeFalsy();
    });

    it('returns true if it starts with the same word', function() {
      location.path('/test/3/show');
      expect(scope.isActive('/test')).toBeTruthy();
    });

    it('returns true if it starts with the same word followed by query string', function() {
      location.path('/test?id=3');
      expect(scope.isActive('/test')).toBeTruthy();
    });
  });
});
