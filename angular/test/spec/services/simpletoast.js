'use strict';

describe('Service: simpleToast', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var simpleToast;
  beforeEach(inject(function (_simpleToast_) {
    simpleToast = _simpleToast_;
  }));

  it('should do something', function () {
    expect(!!simpleToast).toBe(true);
  });

});
