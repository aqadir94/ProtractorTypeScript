import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { async } from "q";
import {Calc} from '../Page_objects/Calc';
import { AngularP } from "../Page_objects/AngularP";
import chai from "chai";

let calc=new Calc();
let page=new AngularP;
var expect = chai.expect;




Given('User is on the {string} home page', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    if (string=="calculator"){

       await browser.get("https://juliemr.github.io/protractor-demo/");
    }

    else if(string=="AngularJS"){

        await browser.get("https://angularjs.org/");

    }
  });

When('User enters {string} and {string}',async(string,string2)=>{


    let calc=new Calc();

    await calc.firstTextBox.sendKeys(string);
    await calc.secondTextBox.sendKeys(string2);
    await calc.go.click();
    
});

Then( 'User should be able to see results as {string}',async(stringy)=>{


    await calc.result.getText().then(function(text){

        expect(stringy).to.equal(text);



});


});

When('user clicks on the {string}', async(string)=>{


    await page.lnkAngulario.click();
    



});

