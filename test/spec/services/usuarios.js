'use strict';

describe('Service: tecnicos', function () {

  // load the service's module
  beforeEach(module('backstageApp'));

  // instantiate service
  var tecnicos;
  beforeEach(inject(function (_tecnicos_) {
    tecnicos = _tecnicos_;
  }));

  it('should do something', function () {
    expect(!!tecnicos).toBe(true);
  });

});
