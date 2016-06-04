'use strict';

describe('Directive: equipFilter', function () {

  // load the directive's module
  beforeEach(module('backstageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<equip-filter></equip-filter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the equipFilter directive');
  }));
});
