'use strict';

var LoginPage = function() {
    this.username = element(by.model("loginCtrl.username"));
    this.password = element(by.model("loginCtrl.password"));
    this.submit = element(by.css("button[type='submit']"));
};

module.exports = new LoginPage();