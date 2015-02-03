describe('HomeController', function() {
  beforeEach(module('hs'));

  var ctrl;

  beforeEach(inject(function($controller, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/employees').respond(MOCK_EMPLOYEES);

    ctrl = $controller('HomeController');
    $httpBackend.flush();
  }));

  afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should initialize the controller', function() {
    expect(ctrl).toBeTruthy();
  });

  it('should correctly sort the grid', function() {
    ctrl.sortGrid('jobTitle');

    expect(ctrl.gridOptions.orderBy).toBe('jobTitle');
    expect(ctrl.gridOptions.reverseOrder).toBe(false);
  });

  it('should correctly reverse the sorting', function() {
    ctrl.sortGrid('jobTitle');
    ctrl.sortGrid('jobTitle');

    expect(ctrl.gridOptions.orderBy).toBe('jobTitle');
    expect(ctrl.gridOptions.reverseOrder).toBe(true);
  })
});