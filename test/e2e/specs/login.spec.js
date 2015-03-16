var nav = require('../pageobjects/nav'),
    login = require('../pageobjects/login'),
    home = require('../pageobjects/home');

var commonUtils = require('../utils/commonUtils');

describe('Login Page', function() {
  it('Should successfully load the homepage', function() {
    // Make phantomjs happy: https://github.com/angular/protractor/issues/585
    browser.driver.manage().window().setSize(1280, 800);

    browser.get('/');
    expect(browser.getTitle()).toEqual('Headspring Employee Directory');
  });

  it('should successfully log in', function() {
    nav.signInLinkSel.click();

    commonUtils.waitForElement(login.username);

    login.username.sendKeys("admin");
    login.password.sendKeys("admin");
    login.submit.click();
  });

  it('should go back to the homepage and show a sign-out link', function() {
    commonUtils.waitForElement(home.employeeTable);
    expect(nav.signOutLinkSel.getInnerHtml()).toBe("Sign Out");
  });
});