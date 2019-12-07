"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Calc_1 = require("../Page_objects/Calc");
const AngularP_1 = require("../Page_objects/AngularP");
const chai_1 = __importDefault(require("chai"));
let calc = new Calc_1.Calc();
let page = new AngularP_1.AngularP;
var expect = chai_1.default.expect;
cucumber_1.Given('User is on the {string} home page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calculator") {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    }
    else if (string == "AngularJS") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('User enters {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    let calc = new Calc_1.Calc();
    yield calc.firstTextBox.sendKeys(string);
    yield calc.secondTextBox.sendKeys(string2);
    yield calc.go.click();
}));
cucumber_1.Then('User should be able to see results as {string}', (stringy) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.result.getText().then(function (text) {
        expect(stringy).to.equal(text);
    });
}));
cucumber_1.When('user clicks on the {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.lnkAngulario.click();
}));
