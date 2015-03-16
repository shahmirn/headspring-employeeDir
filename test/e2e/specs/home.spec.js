var nav = require('../pageobjects/nav.js');

describe('Home Page', function() {
  it('Should successfully load the homepage', function() {
    // Make phantomjs happy: https://github.com/angular/protractor/issues/585
    browser.driver.manage().window().setSize(1280, 800);
    browser.get('/');

    expect(browser.getTitle()).toEqual('Headspring Employee Directory');
  });

  it('should make sure that there is a sign-in link', function() {

    var signInLinkAllSel = nav.signInLinkAllSel;

    expect(signInLinkAllSel.count()).toBe(1);
    expect(signInLinkAllSel.first().getInnerHtml()).toBe("Sign In");
    // expect(nav.signInLinkSel.getInnerHtml()).toBe("Sign In");
  });
});