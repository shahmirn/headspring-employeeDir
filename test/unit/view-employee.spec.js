describe('ViewEmployeeController', function() {
  beforeEach(module('hs'));

  var ctrl, toaster, $httpBackend;

  beforeEach(inject(function($controller, _$httpBackend_, $injector){
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/employees/1').respond(MOCK_EMPLOYEES[0]);

    var state = {
      params: {
        id: 1
      },
      go: function() {

      }
    };

    ctrl = $controller('ViewEmployeeController', {$state: state});
    $httpBackend.flush();
    
    toaster = $injector.get('toaster');

    spyOn(toaster, 'pop').and.callThrough();
  }));

  afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should initialize the controller', function() {
    expect(ctrl).toBeTruthy();
  });

  it('should successfully delete an employee', function() {
    $httpBackend.expectDELETE('api/employees/1').respond();
    ctrl.deleteEmployee();
    $httpBackend.flush();

    expect(toaster.pop).toHaveBeenCalledWith('success', jasmine.any(Object), jasmine.any(String));
  });
});