'use strict';

/**
 * @ngdoc function
 * @name backstageApp.controller:EquipamentCtrl
 * @description
 * # EquipamentCtrl
 * Controller of the backstageApp
 */

angular.module('backstageApp')
  .controller('EquipamentCtrl', function ($scope, Equipaments, helpers) {

    $scope.filter = function (filterSearch) {
      var equipaments = helpers.filter(Equipaments, {feature: filterSearch});
      $scope.search = function (searchTerm) {
        $scope.equipaments = helpers.search(equipaments, searchTerm);
      };

      $scope.equipaments = equipaments;

    };

    $scope.openAddEquip = function () {
      helpers.openModal('equipament', 'add', 'addEquipFormCtrl', 'lg');
    };

    $scope.openRemoveEquip = function (event, equipaments) {
      var equipament = helpers.getObject(event, equipaments);
      helpers.openModal('equipament', 'remove', 'removeEquipAlertCtrl', 'sm', equipament);
    };

    $scope.openUpdateEquip = function (event, equipaments) {
      var equipament = helpers.getObject(event, equipaments);
      helpers.openModal('equipament', 'update', 'updateEquipCtrl', 'lg', equipament);
    };

    $scope.openViewEquip = function (event, equipaments) {
      var equipament = helpers.getObject(event, equipaments);
      helpers.openModal('equipament', 'view', 'viewEquipCtrl', 'lg', equipament);
    };
  })
  .controller('viewEquipCtrl', function ($scope, $uibModalInstance, resource) {
    var modal = $uibModalInstance;

    $scope.equipament = resource;

    $scope.cancel = function () {
      modal.dismiss('cancel');
    };
  })
  .controller('addEquipFormCtrl', function ($scope, $uibModalInstance, Equipament, $route) {
    var modal = $uibModalInstance;

    $scope.save = function (equipament) {

      Equipament.save(equipament, function (res, err) {
        if(res.$resolved){
          $route.reload();
          modal.close();
        } else {
          $scope.error = err;
        }
      });
    };

    $scope.cancel = function () {
      modal.dismiss('cancel');
    };

  })
  .controller('removeEquipAlertCtrl', function ($scope, Equipament, $route, $uibModalInstance, resource) {
    var modal = $uibModalInstance;

    $scope.remove = function () {
      Equipament.remove(resource, function (res, err) {
        if(res.$resolved){
          $route.reload();
          modal.close();
        } else {
          $scope.error = err;
        }
      });
    };

    $scope.cancel = function () {
      modal.dismiss('cancel');
    };
  })
  .controller('updateEquipCtrl', function ($scope, Equipament, $route, $uibModalInstance, resource) {
    var modal = $uibModalInstance;
    $scope.equipament = resource;

    $scope.update = function (equipament) {

      Equipament.update({id: resource.id}, equipament, function (res, err) {

        if(res.$resolved){
          $route.reload();
          modal.close();
        } else {
          $scope.error = err;
        }
      });
    };

    $scope.cancel = function () {
      modal.dismiss('cancel');
    };

  });
