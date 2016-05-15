'use strict';

/**
 * @ngdoc service
 * @name backstageApp.equipament
 * @description
 * # equipament
 * Service in the backstageApp.
 */
angular.module('backstageApp')
  .factory('Equipaments', function ($resource, $location) {

    var host = $location.host().split(':')[0];

    return $resource('http://'+ host +':5000/equipaments/:feature', {}, {
      query: { method:'GET', isArray:true }
    });
  })
  .factory('Equipament', function ($resource, $location) {

    var host = $location.host().split(':')[0];

    return $resource('http://'+ host +':5000/equipament/:id', {}, {
      'update': { method: 'PUT' }
    });
  });
