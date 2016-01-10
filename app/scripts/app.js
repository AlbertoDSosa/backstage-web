'use strict';

/**
 * @ngdoc overview
 * @name backstageApp
 * @description
 * # backstageApp
 *
 * Main module of the application.
 */
angular
  .module('backstageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tecnicos', {
        templateUrl: 'views/tecnicos.html',
        controller: 'TecnicosCtrl',
        controllerAs: 'tec'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
