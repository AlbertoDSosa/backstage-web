'use strict';

describe('Service: show', function () {

  // load the service's module
  beforeEach(module('backstageApp'));

  // instantiate service
  var show;
  beforeEach(inject(function (_show_) {
    show = _show_;
  }));

  it('should do something', function () {
    expect(!!show).toBe(true);
  });

});
