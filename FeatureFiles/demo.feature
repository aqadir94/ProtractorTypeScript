Feature: Calculator
@calc
Scenario Outline: Addition


Given User is on the "calculator" home page
When User enters "<Num1>" and "<Num2>"
Then User should be able to see results as "<result>"

Examples:
| Num1 | Num2 | result|
| 2  | 3  |6|
|5   |5|10|




@AngularJS
Scenario: Angular JS

Given User is on the "AngularJS" home page
When user clicks on the "Link"