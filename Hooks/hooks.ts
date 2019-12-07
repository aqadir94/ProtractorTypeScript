import {Before, After, Status} from "cucumber";
import { browser } from "protractor";


Before({tags: "@AngularJS"}, function () {
    console.log("sadad");
  browser.manage().window().maximize();
  });


  After( async function (scenario) {
    console.log("Test is completed");


    if (scenario.result.status===Status.FAILED){


const screenshot= await browser.takeScreenshot();
this.attach(screenshot,"image/png");

    }

  });
