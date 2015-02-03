describe('EditEmployeeController', function() {
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

    ctrl = $controller('EditEmployeeController', {$state: state});
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

  it('should show a success message on success', function() {
    ctrl.uploadComplete();
    expect(toaster.pop).toHaveBeenCalledWith('success', jasmine.any(Object), jasmine.any(String));
  });

  it('should show an error message on failure', function() {
    ctrl.uploadComplete({error: true});
    expect(toaster.pop).toHaveBeenCalledWith('error', jasmine.any(Object), jasmine.any(String));
  });
});