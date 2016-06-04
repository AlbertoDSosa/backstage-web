'use strict';

/**
 * @ngdoc directive
 * @name backstageApp.directive:equipFilter
 * @description
 * # equipFilter
 */
angular.module('backstageApp')
  .directive('equipFilter', function () {
    return {
      templateUrl: '../partials/equipament/equip-filter.html',
      restrict: 'E',
    };
  });
