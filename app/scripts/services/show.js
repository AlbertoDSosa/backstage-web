'use strict';

/**
 * @ngdoc service
 * @name backstageApp.show
 * @description
 * # show
 * Factory in the backstageApp.
 */
angular.module('backstageApp')
  .factory('Show', function ($resource, $location) {

    var host = $location.host().split(':')[0];

    return $resource('http://'+ host +':5000/show/:id', {}, {
      'update': { method: 'PUT' }
    });
  });
