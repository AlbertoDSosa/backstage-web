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
    'ui.bootstrap',
    'angular-toArrayFilter'
  ])
  .config(function ($routeProvider, $resourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsersCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });

       $resourceProvider.defaults.stripTrailingSlashes = false;
  });
