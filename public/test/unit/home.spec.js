describe('HomeController', function() {
  beforeEach(module('hs'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('HomeController');

    spyOn(ctrl, "getViewportWidth").and.returnValue({
      atLeast768: true,
      atLeast992: false
    });
  }));

  it('should initialize the controller', function() {
    expect(ctrl).toBeTruthy();
  });

  it('should have the columns defined', function() {
    expect(ctrl.columns.length).toBe(5);
  });

  it('should successfully hide columns on lower resolutions', function() {
    ctrl.hideColumns();
    expect(ctrl.columns[0].visible).toBeFalsy();
    expect(ctrl.columns[2].visible).toBeTruthy();
  })
});