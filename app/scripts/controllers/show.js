'use strict';

/**
 * @ngdoc function
 * @name backstageApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the backstageApp
 */
angular.module('backstageApp')
  .controller('ShowCtrl', function ($scope, helpers) {

    $scope.openAddShow = function () {
      helpers.openModal('show', 'add', 'addShowFormCtrl', 'lg');
    };

    $scope.openRemoveShow = function (event, shows) {
      var show = helpers.getObject(event, shows);
      helpers.openModal('show', 'remove', 'removeShowAlertCtrl', 'sm', show);
    };

    $scope.openUpdateShow = function (event, shows) {
      var show = helpers.getObject(event, shows);
      helpers.openModal('show', 'update', 'updateShowCtrl', 'lg', show);
    };

    $scope.openViewShow = function (event, shows) {
      var show = helpers.getObject(event, shows);
      helpers.openModal('show', 'view', 'viewShowCtrl', 'lg', show);
    };

  })
  .controller('addShowFormCtrl', function ($scope, $uibModalInstance, Show, $route, Equipaments, helpers) {
    var modal = $uibModalInstance;
    $scope.show = {};
    $scope.show.equipaments = [];

    $scope.save = function (show) {

      Show.save(show, function (res, err) {
        if(res.$resolved){
          $route.reload();
          modal.close();
        } else {
          $scope.error = err;
        }
      });
    };


    $scope.filter = function (filterSearch) {
      var equipaments = helpers.filter(Equipaments, {feature: filterSearch});
      $scope.search = function (searchTerm) {
        $scope.equipaments = helpers.search(equipaments, searchTerm);
      };
      $scope.equipaments = equipaments;
    };

    $scope.addEquip = function (event, equipaments) {

      var equipament = helpers.getObject(event, equipaments);
      $scope.show.equipaments.push(equipament);
    };

    $scope.cancel = function () {
      modal.dismiss('cancel');
    };

  });
