'use strict';

/**
 * @ngdoc function
 * @name backstageApp.controller:TecnicosCtrl
 * @description
 * # TecnicosCtrl
 * Controller of the backstageApp
 */
angular.module('backstageApp')
  .controller('TecnicosCtrl', function ($scope, tecnicos) {
    $scope.tecnicos = tecnicos.query();
  })
  .controller('ModalDemoCtrl', function ($scope, $uibModal) {



    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '../partials/add-user.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });
    };


  })
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $log, tecnico) {
    var master = {};

    $scope.save = function (tec) {
      master = angular.copy(tec);
      tecnico.save(master);
      $uibModalInstance.close();

    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  });

