'use strict';

angular.module('ngFrontApp').service('edges', function() {
  this.query = function() {
    return [
      {
        name: 'Nif-Nif',
        description: 'description 1',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: 'Nuff', value: 'Nuff' },
          { name: 'Naf', value: 'Naf' }
        ]
      },
      {
        name: 'Fargo',
        description: 'Bemidji',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Nygaard' },
          { name: 'Lorne', value: 'Malvo' }
        ]
      }
    ];
  }
})
