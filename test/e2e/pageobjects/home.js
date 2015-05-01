/** 
 * Using page object pattern from:
 * https://github.com/DaftMonk/fullstack-demo/blob/master/e2e/main/main.po.js
 * and https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var HomePage = function() {
    this.employeeTable = element(by.css(".table-responsive"));
    this.addEmployeeButton = element(by.id("addEmployeeBtn"));

    this.firstNameFilter = element(by.id("firstNameFilter"));

    this.employeeVisibleRows = element.all(by.css(".table-responsive tbody tr:not([style*='display: none'])"));
};

module.exports = new HomePage();