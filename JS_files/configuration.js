"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Spec.js'],
    directConnect: true,
    onPrepare: function () {
        console.log("I will be excuted before everyone");
        protractor_1.browser.driver.manage().window().maximize();
    }
};
