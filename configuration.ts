import {browser,Config} from 'protractor';
export let config: Config  = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Spec.js'],
directConnect:true,
  onPrepare:function(){

    console.log("I will be excuted before everyone");
    browser.driver.manage().window().maximize();
  }

  };