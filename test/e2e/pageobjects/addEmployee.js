/** 
 * Using page object pattern from:
 * https://github.com/DaftMonk/fullstack-demo/blob/master/e2e/main/main.po.js
 * and https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var AddEmployee = function() {
    this.firstName = element(by.id("firstName"));
    this.lastName = element(by.id("lastName"));
    this.jobTitle = element(by.id("jobTitle"));
    this.loc = element(by.id("location"));
    this.email = element(by.id("email"));
    this.submit = element(by.css("input[type='submit']"));
};

module.exports = new AddEmployee();