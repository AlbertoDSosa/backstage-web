'use strict';

describe('Service: equipament', function () {

  // load the service's module
  beforeEach(module('backstageApp'));

  // instantiate service
  var equipament;
  beforeEach(inject(function (_equipament_) {
    equipament = _equipament_;
  }));

  it('should do something', function () {
    expect(!!equipament).toBe(true);
  });

});
