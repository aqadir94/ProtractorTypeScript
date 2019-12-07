"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularP {
    constructor() {
        this.lnkAngulario = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.searchBox = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.AngularP = AngularP;
