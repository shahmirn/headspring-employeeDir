describe('AddEmployeeController', function() {
  beforeEach(module('hs'));

  var ctrl, toaster;

  beforeEach(inject(function($controller, $injector){
    ctrl = $controller('AddEmployeeController');
    toaster = $injector.get('toaster');

    spyOn(toaster, 'pop').and.callThrough();
  }));

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