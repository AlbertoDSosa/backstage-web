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
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, $resourceProvider, localStorageServiceProvider) {
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
      .when('/equipos', {
        templateUrl: 'views/equipos.html',
        controller: 'EquipamentCtrl',
        controllerAs: 'equip'
      })
      .when('/eventos', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        controllerAs: 'show'
      })
      .otherwise({
        redirectTo: '/'
      });

    $resourceProvider.defaults.stripTrailingSlashes = false;
    localStorageServiceProvider
    .setPrefix('backstage');

  });
