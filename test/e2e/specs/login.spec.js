var nav = require('../elements/nav'),
    login = require('../elements/login'),
    home = require('../elements/home');

var commonUtils = require('../utils/commonUtils');

describe('Login Page', function() {
  it('Should successfully load the homepage', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Headspring Employee Directory');
  });

  it('should successfully log in', function() {
    nav.elements.signInLinkSel.click();

    commonUtils.waitForElement(login.elements.username);

    login.elements.username.sendKeys("admin");
    login.elements.password.sendKeys("admin");
    login.elements.submit.click();
  });

  it('should go back to the homepage and show a sign-out link', function() {
    commonUtils.waitForElement(home.elements.employeeTable);
    expect(nav.elements.signOutLinkSel.getText()).toBe("Sign Out");
  });
});