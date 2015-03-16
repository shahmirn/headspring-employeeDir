'use strict';

exports.waitForElement = function(ele) {
    return browser.wait(function () {
        return ele.isPresent().then(function (isPresent) {
            return isPresent === true;
        });
    });
};