'use strict';

/**
 * @ngdoc directive
 * @name backstageApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('backstageApp')
  .directive('navbar', function () {
    return {
      templateUrl: '../partials/navbar.html',
      restrict: 'E',
      controller: function ($scope, $location) {
        $scope.isActive = function (route) {
          if (route === $location.path()) {
            return 'active';
          }
        };
      }
    };
  });
