'use strict';

/**
 * @ngdoc overview
 * @name ngFrontApp
 * @description
 * # ngFrontApp
 *
 * Main module of the application.
 */
angular
  .module('ngFrontApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
