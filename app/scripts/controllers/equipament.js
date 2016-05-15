'use strict';

/**
 * @ngdoc function
 * @name backstageApp.controller:EquipamentCtrl
 * @description
 * # EquipamentCtrl
 * Controller of the backstageApp
 */

angular.module('backstageApp')
  .controller('EquipamentCtrl', function ($scope, Equipaments, $uibModal) {

    $scope.filter = function () {
      Equipaments.query({ feature: $scope.filterSearch}, function (equipaments) {
        $scope.search = function () {
          $scope.equipaments = equipaments.filter(function (element) {
            var name = element && element.name || '';
            return name.toLowerCase().indexOf($scope.searchTerm.toLowerCase()) !== -1;
          });
        };

      $scope.equipaments = equipaments;
      });
    };

    function onOpen (file, ctrl, size, obj) {
      $uibModal.open({
        animation: true,
        templateUrl: '../partials/equipament/'+ file +'.html',
        controller: ctrl,
        size: size,
        resolve: {
          renderedEquip: function () {
            return obj;
          }
        }
      });
    }

    function getEquip (event) {
      var id = event.target.id;
      var separator = id.split('_');
      var index = separator[1];
      var equipament = $scope.equipaments[index];
      return equipament;
    }

    $scope.openAddEquip = function () {
      onOpen('add', 'addEquipFormCtrl', 'lg', {});
    };

    $scope.openRemoveEquip = function (event) {
      var equipament = getEquip(event);
      onOpen('remove', 'removeEquipAlertCtrl', 'sm', equipament);
    };

    $scope.openUpdateEquip = function (event) {
      var equipament = getEquip(event);
      onOpen('update', 'updateEquipCtrl', 'lg', equipament);
    };

    $scope.openViewEquip = function (event) {
      var equipament = getEquip(event);
      onOpen('view', 'viewEquipCtrl', 'lg', equipament);
    };
  })
  .controller('viewEquipCtrl', function ($scope, $uibModalInstance, renderedEquip) {
    $scope.equipament = renderedEquip;

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })
  .controller('addEquipFormCtrl', function ($scope, $uibModalInstance, Equipament, $route) {

    $scope.save = function (equipament) {

      Equipament.save(equipament, function (res, err) {
        if(res.$resolved){
          $route.reload();
          $uibModalInstance.close();
        } else {
          $scope.error = err;
        }
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  })
  .controller('removeEquipAlertCtrl', function ($scope, Equipament, $route, $uibModalInstance, renderedEquip) {

    $scope.remove = function () {
      Equipament.remove(renderedEquip, function (res, err) {
        if(res.$resolved){
          $route.reload();
          $uibModalInstance.close();
        } else {
          $scope.error = err;
        }
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })
  .controller('updateEquipCtrl', function ($scope, Equipament, $route, $uibModalInstance, renderedEquip) {
    $scope.equipament = renderedEquip;

    $scope.update = function (equipament) {

      Equipament.update({id: renderedEquip.id}, equipament, function (res, err) {

        if(res.$resolved){
          $route.reload();
          $uibModalInstance.close();
        } else {
          $scope.error = err;
        }
      });
    };

    $scope.cancel = function () {
      $route.reload();
      $uibModalInstance.dismiss('cancel');
    };

  });
