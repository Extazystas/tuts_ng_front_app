'use strict';

describe('EdgesController', function () {
  var location, scope, reqs;

  beforeEach(module('ngFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope;
    $controller('EdgesController', {
      $scope: scope
    });
  }));

  describe('displayRequirements', function() {
    it('concatenates name and value of the requirement', function() {
      reqs = [{ name: 'Lorne', value: 'Malvo' }];

      expect(scope.displayRequirements(reqs)).toEqual('Lorne Malvo');
    });

    it('ignores name if it is null', function() {
      reqs = [{ name: null, value: 'Malvo' }];

      expect(scope.displayRequirements(reqs)).toEqual('Malvo');
    });

    it('requirements are delimited by comma', function() {
      reqs = [{ name: 'Lorne', value: 'Malvo' }, { name: 'Big', value: 'Lebowski' }, { name: null, value: 'Nygaard' }];

      expect(scope.displayRequirements(reqs)).toEqual('Lorne Malvo, Big Lebowski, Nygaard');
    });
  });
});
