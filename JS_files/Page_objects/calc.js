"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calc {
    constructor() {
        this.firstTextBox = protractor_1.element(protractor_1.by.model("first"));
        this.secondTextBox = protractor_1.element(protractor_1.by.model("second"));
        this.go = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result = protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
}
exports.Calc = Calc;
