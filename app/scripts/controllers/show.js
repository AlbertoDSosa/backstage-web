'use strict';

/**
 * @ngdoc function
 * @name backstageApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the backstageApp
 */
angular.module('backstageApp')
  .controller('ShowCtrl', function ($scope, $uibModal) {

    function onOpen (file, ctrl, size, obj) {
      $uibModal.open({
        animation: true,
        templateUrl: '../partials/show/'+ file +'.html',
        controller: ctrl,
        size: size,
        resolve: {
          renderedShow: function () {
            return obj;
          }
        }
      });
    }

    function getShow (event) {
      var id = event.target.id;
      var separator = id.split('_');
      var index = separator[1];
      var show = $scope.shows[index];
      return show;
    }

    $scope.openAddShow = function () {
      onOpen('add', 'addShowFormCtrl', 'lg', {});
    };

    $scope.openRemoveShow = function (event) {
      var show = getShow(event);
      onOpen('remove', 'removeShowAlertCtrl', 'sm', show);
    };

    $scope.openUpdateShow = function (event) {
      var show = getShow(event);
      onOpen('update', 'updateShowCtrl', 'lg', show);
    };

    $scope.openViewShow = function (event) {
      var show = getShow(event);
      onOpen('view', 'viewShowCtrl', 'lg', show);
    };

  })
  .controller('addShowFormCtrl', function ($scope, $uibModalInstance, Show, $route, Equipaments) {

    $scope.show = {};
    $scope.show.equipaments = [];

    $scope.save = function (show) {
      console.log(show);

      Show.save(show, function (res, err) {
        if(res.$resolved){
          $route.reload();
          $uibModalInstance.close();
        } else {
          $scope.error = err;
        }
      });
    };


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

    $scope.addEquip = function (event) {
      var id = event.target.id;
      var separator = id.split('_');
      var index = separator[1];
      var equipament = $scope.equipaments[index];
      $scope.show.equipaments.push(equipament);
      console.log($scope.show.equipaments);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  });
