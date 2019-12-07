import { ElementFinder, element, by } from "protractor";

export class Calc{



firstTextBox:ElementFinder;
secondTextBox:ElementFinder;
go:ElementFinder;
result:ElementFinder;

constructor(){

this.firstTextBox=element(by.model("first"));
this.secondTextBox=element(by.model("second"));
this.go=element(by.id('gobutton'));
this.result=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));

}

}