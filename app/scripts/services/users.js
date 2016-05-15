'use strict';

/**
 * @ngdoc service
 * @name backstageApp.usuarios
 * @description
 * # usuarios
 * Factory in the backstageApp.
 */
angular.module('backstageApp')
  .factory('Users', function ($resource) {
    return $resource('http://localhost:5000/users', {}, {
      query: { method:'GET', isArray:true }
    });
  })
  .factory('User', function ($resource) {
    return $resource('http://localhost:5000/user/:userId', {}, {
      'update': { method: 'PUT' }
    });
  });
