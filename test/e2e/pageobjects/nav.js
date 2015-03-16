'use strict';

var Navigation = function() {
    this.signInLinkAllSel = element.all(by.id("signInLink"));
    this.signInLinkSel = element(by.id("signInLink"));

    this.signOutLinkAllSel = element.all(by.id("signOutLink"));
    this.signOutLinkSel = element(by.id("signOutLink"));
};

module.exports = new Navigation();