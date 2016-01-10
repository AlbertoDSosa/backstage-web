'use strict';

/**
 * @ngdoc service
 * @name backstageApp.tecnicos
 * @description
 * # tecnicos
 * Factory in the backstageApp.
 */
angular.module('backstageApp')
  .factory('tecnicos', function ($resource) {
    // Service logic
    return $resource('http://localhost:5000/users', {}, {
        query: { method:'GET', params:{}, isArray:true }
      });
  })
  .factory('tecnico', function ($resource) {
    return $resource('http://localhost:5000/user', {}, {
        save: { method: 'POST'}
    });
  });
