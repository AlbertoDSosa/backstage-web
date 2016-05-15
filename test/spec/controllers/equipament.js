'use strict';

describe('Controller: EquipamentCtrl', function () {

  // load the controller's module
  beforeEach(module('backstageApp'));

  var EquipamentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquipamentCtrl = $controller('EquipamentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EquipamentCtrl.awesomeThings.length).toBe(3);
  });
});
