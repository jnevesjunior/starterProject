'use strict';

describe('Controller: FileCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var FileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FileCtrl = $controller('FileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FileCtrl.awesomeThings.length).toBe(3);
  });
});
