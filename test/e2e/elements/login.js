'use strict';

exports.elements = {
    username: element(by.model("loginCtrl.username")),
    password: element(by.model("loginCtrl.password")),
    submit: element(by.css("button[type='submit']"))
};