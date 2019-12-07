import {browser, element, by} from 'protractor';
import 'mocha';
import { async } from 'q';
import{Calc} from "./Page_objects/Calc";
import{AngularP} from "./Page_objects/AngularP";
describe("Chain locators",()=>{

    


it("addition",async()=>{

 await   browser.get("https://juliemr.github.io/protractor-demo/");

   

let calc=new Calc();

await calc.firstTextBox.sendKeys("10");
await calc.secondTextBox.sendKeys("20");


await calc.go.click();

await calc.result.getText().then(function(text){

        console.log(text);


    })


    element(by.css("h2[class='ng-binding']")).getText().then(function(text){

        console.log(text);
        
    })

        })

        it("Angular JS test",async() =>{
            
            let page=new AngularP;

            await browser.get("https://angularjs.org/");
            await page.lnkAngulario.click();
          
           await page.searchBox.sendKeys("sajeeya");
            await browser.sleep(5000);


        })
        
    })

