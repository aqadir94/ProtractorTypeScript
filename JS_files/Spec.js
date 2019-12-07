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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
require("mocha");
const Calc_1 = require("./Page_objects/Calc");
const AngularP_1 = require("./Page_objects/AngularP");
describe("Chain locators", () => {
    it("addition", () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        let calc = new Calc_1.Calc();
        yield calc.firstTextBox.sendKeys("10");
        yield calc.secondTextBox.sendKeys("20");
        yield calc.go.click();
        yield calc.result.getText().then(function (text) {
            console.log(text);
        });
        protractor_1.element(protractor_1.by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text);
        });
    }));
    it("Angular JS test", () => __awaiter(void 0, void 0, void 0, function* () {
        let page = new AngularP_1.AngularP;
        yield protractor_1.browser.get("https://angularjs.org/");
        yield page.lnkAngulario.click();
        yield page.searchBox.sendKeys("sajeeya");
        yield protractor_1.browser.sleep(5000);
    }));
});
