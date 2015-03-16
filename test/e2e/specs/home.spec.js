var nav = require('../elements/nav.js');

describe('Home Page', function() {
  it('Should successfully load the homepage', function() {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Headspring Employee Directory');
  });

  it('should make sure that there is a sign-in link', function() {

    var signInLinkAllSel = nav.elements.signInLinkAllSel;

    expect(signInLinkAllSel.count()).toBe(1);
    expect(signInLinkAllSel.first().getText()).toBe("Sign In");
    // expect(nav.elements.signInLinkSel.getText()).toBe("Sign In");
  });
});