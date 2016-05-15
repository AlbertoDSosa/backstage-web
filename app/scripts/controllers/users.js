'use strict';

/**
 * @ngdoc function
 * @name backstageApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the backstageApp
 */
angular.module('backstageApp')
  .controller('UsersCtrl', function ($scope, Users, $uibModal) {
    $scope.users = Users.query();

    function onOpen (file, ctrl, size, obj) {
      $uibModal.open({
        animation: true,
        templateUrl: '../partials/'+ file +'.html',
        controller: ctrl,
        size: size,
        resolve: {
          renderedUser: function () {
            return obj;
          }
        }
      });
    }

    function getUser (event) {
      var id = event.target.id;
      var separator = id.split('_');
      var index = separator[1];
      var user = $scope.users[index];
      return user;
    }

    $scope.openAddUser = function () {
      onOpen('add-user', 'addUserFormCtrl', 'lg');
    };

    $scope.openRemoveUser = function (event) {
      var user = getUser(event);
      onOpen('remove-user', 'removeUserAlertCtrl', 'sm', user);
    };

    $scope.openUpdateUser = function (event) {
      var user = getUser(event);
      onOpen('update-user', 'updateUserCtrl', 'lg', user);
    };

  })
  .controller('addUserFormCtrl', function ($scope, $uibModalInstance, User, $route) {

    $scope.save = function (user) {

      User.save(user, function (res, err) {
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
  .controller('removeUserAlertCtrl', function ($scope, User, $route, $uibModalInstance, renderedUser) {

    $scope.remove = function () {
      User.remove(renderedUser, function (res, err) {
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
  .controller('updateUserCtrl', function ($scope, User, $route, $uibModalInstance, renderedUser) {
    $scope.user = renderedUser;

    $scope.update = function (user) {

      User.update({userId: renderedUser.userId}, user, function (res, err) {

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

