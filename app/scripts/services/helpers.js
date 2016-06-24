'use strict';

/**
 * @ngdoc service
 * @name backstageApp.helpers
 * @description
 * # helpers
 * Factory in the backstageApp.
 */
angular.module('backstageApp')
  .factory('helpers', function ($uibModal) {

    //

    this.getObject = function (event, list) {
      var id = event.target.id;
      var separator = id.split('_');
      var index = separator[1];

      return list[index];
    };

    //

    this.openModal = function (path, file, ctrl, size, obj) {
      obj = obj || {};

      $uibModal.open({
        animation: true,
        templateUrl: '../partials/' + path + '/' + file +'.html',
        controller: ctrl,
        size: size,
        resolve: {
          resource: function () {
            return obj;
          }
        }
      });
    };

    //

    this.filter = function (resource, param ) {
      return resource.query(param, function (elements) {
        console.log(elements[0]);
        return elements;
      });
    };

    this.search = function (elements, searchTerm) {
      return elements.filter(function (element) {
        var name = element && element.name || '';
        return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
    };

    return this;
  });
