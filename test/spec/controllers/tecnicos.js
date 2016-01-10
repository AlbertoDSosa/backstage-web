'use strict';

describe('Controller: TecnicosCtrl', function () {

  // load the controller's module
  beforeEach(module('backstageApp'));

  var TecnicosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TecnicosCtrl = $controller('TecnicosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TecnicosCtrl.awesomeThings.length).toBe(3);
  });
});
