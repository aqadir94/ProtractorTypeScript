import { ElementFinder, element, by } from "protractor"
import { constructor } from "q";

export class AngularP{


lnkAngulario:ElementFinder;
searchBox:ElementFinder;


constructor(){


this.lnkAngulario=element(by.linkText("angular.io"));
this.searchBox=element(by.css("input[type='search']"));



}


}