"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../FeatureFiles/demo.feature'],
    cucumberOpts: {
        // tags:"@calc",
        format: 'json:./cucumberreport.json',
        require: [
            './Step_Definitions/*.js',
            './Hooks/hooks.js'
        ]
    },
    directConnect: true,
    onPrepare: function () {
        console.log("I will be excuted before everyone");
        //browser.driver.manage().window().maximize();
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: 'cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
