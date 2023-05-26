$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/abhis/IdeaProjects/Abhi_BDD_Cucumber_FW_Learning/src/test/resources/Features/B_Register.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "NopCommerce Registration with valid details",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-registration-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Click on Register btn",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User able to enter personal details \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cDateOfBirth\u003e\" \"\u003cDateOfMonth\u003e\" \"\u003cDateOfYear\u003e\" \"\u003cEmail\u003e\" \"\u003cCompanyName\u003e\"  \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Register btn submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "",
        "Lastname",
        "",
        "DateOfBirth",
        "",
        "DateOfMonth",
        "",
        "DateOfYear",
        "",
        "Email",
        "",
        "CompanyName",
        "",
        "Password",
        "",
        "ConfirmPassword"
      ],
      "line": 13,
      "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;;1"
    },
    {
      "cells": [
        "Abhishek",
        "",
        "Sanghavi",
        "",
        "14",
        "",
        "July",
        "",
        "1987",
        "",
        "rohan123@gmail.com",
        "",
        "Marks Wholesale Ltd",
        "",
        "rohan123",
        "",
        "rohan123"
      ],
      "line": 14,
      "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 7063054800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1610365500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "NopCommerce Registration with valid details",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-registration-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Click on Register btn",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User able to enter personal details \"Abhishek\" \"Sanghavi\" \"14\" \"July\" \"1987\" \"rohan123@gmail.com\" \"Marks Wholesale Ltd\"  \"rohan123\" \"rohan123\"",
  "matchedColumns": [
    0,
    16,
    2,
    4,
    6,
    8,
    10,
    12,
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Register btn submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Click_on_Register_btn()"
});
formatter.result({
  "duration": 1307805000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhishek",
      "offset": 37
    },
    {
      "val": "Sanghavi",
      "offset": 48
    },
    {
      "val": "14",
      "offset": 59
    },
    {
      "val": "July",
      "offset": 64
    },
    {
      "val": "1987",
      "offset": 71
    },
    {
      "val": "rohan123@gmail.com",
      "offset": 78
    },
    {
      "val": "Marks Wholesale Ltd",
      "offset": 99
    },
    {
      "val": "rohan123",
      "offset": 122
    },
    {
      "val": "rohan123",
      "offset": 133
    }
  ],
  "location": "Steps.user_able_to_enter_personal_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2249181200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Register_btn_submit()"
});
formatter.result({
  "duration": 722735800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 352337700,
  "status": "passed"
});
});