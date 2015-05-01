var nav = require('../pageobjects/nav'),
    home = require('../pageobjects/home'),
    addEmployee = require('../pageobjects/addEmployee');

var commonUtils = require('../utils/commonUtils');

var firstName = "Shahmir " + new Date().getTime();

describe('Add Employee Page', function() {
  it('Should show an add employee link', function() {
    commonUtils.waitForElement(home.addEmployeeButton);
    home.addEmployeeButton.click();
  });

  it('should successfully add an employee', function() {
    commonUtils.waitForElement(addEmployee.firstName);

    addEmployee.firstName.sendKeys(firstName);
    addEmployee.lastName.sendKeys("Noorani");
    addEmployee.loc.sendKeys("Houston");
    addEmployee.jobTitle.sendKeys("Software Engineer");
    addEmployee.email.sendKeys("shahmir.noorani@headspring.com");

    addEmployee.submit.click();
  });

  it('should go back to the homepage and find the added employee', function() {
    commonUtils.waitForElement(home.employeeTable);

    home.firstNameFilter.sendKeys(firstName);
    expect(home.employeeVisibleRows.count()).toBe(1);

    // For demo purposes: Let the user see what's going on
    browser.driver.sleep(1000);
  });
});