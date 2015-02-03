describe('LoginController', function() {
  beforeEach(module('hs'));

  var ctrl;

  beforeEach(inject(function($controller, $rootScope, _$httpBackend_, $injector) {
    $httpBackend = _$httpBackend_;
    $scope = $rootScope.$new();
    $httpBackend.expectGET('partials/home.html').respond('');

    ctrl = $controller('LoginController', {$scope: $scope});
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

  it('should successfully sign in', function() {
    $httpBackend.expectPOST('api/login').respond();
    ctrl.login();
    $httpBackend.flush();

    expect(toaster.pop).toHaveBeenCalledWith('success', jasmine.any(Object), jasmine.any(String));
  });
});