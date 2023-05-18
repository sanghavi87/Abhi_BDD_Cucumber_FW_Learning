$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_Login.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Login",
  "description": "",
  "id": "nopcommerce-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "# Data Driven with Example keyword"
    }
  ],
  "line": 8,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;1"
    },
    {
      "cells": [
        "abcd2@gmail.com",
        "Test@123"
      ],
      "line": 16,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;2"
    },
    {
      "cells": [
        "abcd3@gmail.com",
        "Test@123"
      ],
      "line": 17,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;3"
    },
    {
      "cells": [
        "abcd4@gmail.com",
        "Test@123"
      ],
      "line": 18,
      "id": "nopcommerce-login;nopcommerce-valid-login-test;;4"
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
  "duration": 6790683800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1504068600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"abcd2@gmail.com\" and \"Test@123\" and Click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1156158200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 24903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Steps.user_enter_and_and_Click_on_login_button(String,String)"
});
formatter.result({
  "duration": 1477408100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 536087300,
  "status": "passed"
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
  "duration": 2129401300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1703893900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"abcd3@gmail.com\" and \"Test@123\" and Click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1148810300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 18433000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Steps.user_enter_and_and_Click_on_login_button(String,String)"
});
formatter.result({
  "duration": 1447061700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 188699300,
  "status": "passed"
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
  "duration": 2340800800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1346829400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"abcd4@gmail.com\" and \"Test@123\" and Click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 1266879400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 44956700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd4@gmail.com",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 34
    }
  ],
  "location": "Steps.user_enter_and_and_Click_on_login_button(String,String)"
});
formatter.result({
  "duration": 1007032700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 527707500,
  "status": "passed"
});
formatter.uri("B_Register.feature");
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
  "duration": 2293101400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1553796800,
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
  "duration": 1116320700,
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
  "duration": 2077992000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Register_btn_submit()"
});
formatter.result({
  "duration": 832832600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 409608000,
  "status": "passed"
});
formatter.uri("C_SelectProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Select Product",
  "description": "",
  "id": "select-product",
  "keyword": "Feature"
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
  "duration": 2089445500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1562637400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to select the product from homepage",
  "description": "",
  "id": "select-product;user-should-able-to-select-the-product-from-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 1279766500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 609923300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1389466100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 507381400,
  "status": "passed"
});
formatter.uri("D_AddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "Add To Cart",
  "description": "",
  "id": "add-to-cart",
  "keyword": "Feature"
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
  "duration": 2196261500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1637786000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to add the product into the cart",
  "description": "",
  "id": "add-to-cart;user-should-able-to-add-the-product-into-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 834175600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 681105300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1475049800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3343847700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 72100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 181883900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 719113700,
  "status": "passed"
});
formatter.uri("E_ShoppingCart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart Page",
  "description": "",
  "id": "shopping-cart-page",
  "keyword": "Feature"
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
  "duration": 2140709200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1651505400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to amend and update Shopping cart",
  "description": "",
  "id": "shopping-cart-page;user-should-able-to-amend-and-update-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 1261833500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 664350900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1369364100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3327431100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 171276800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shopping_cart_pop_up_message()"
});
formatter.result({
  "duration": 3686599500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.update_qty_again_in_shopping_cart_page()"
});
formatter.result({
  "duration": 3268798800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Update_shopping_cart()"
});
formatter.result({
  "duration": 499371900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_T_C_box()"
});
formatter.result({
  "duration": 349290300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKOUT",
      "offset": 10
    }
  ],
  "location": "Steps.click_on_button(String)"
});
formatter.result({
  "duration": 853759800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 487565600,
  "status": "passed"
});
formatter.uri("F_CheckOut.feature");
formatter.feature({
  "line": 1,
  "name": "CheckOut Page",
  "description": "",
  "id": "checkout-page",
  "keyword": "Feature"
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
  "duration": 2184159600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1333257800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to make payment as Guest",
  "description": "",
  "id": "checkout-page;user-should-able-to-make-payment-as-guest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 1252791300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 628038700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1406070300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3344724000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 167656000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shopping_cart_pop_up_message()"
});
formatter.result({
  "duration": 3678983800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.update_qty_again_in_shopping_cart_page()"
});
formatter.result({
  "duration": 3274683600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Update_shopping_cart()"
});
formatter.result({
  "duration": 478605300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_T_C_box()"
});
formatter.result({
  "duration": 360791900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKOUT",
      "offset": 10
    }
  ],
  "location": "Steps.click_on_button(String)"
});
formatter.result({
  "duration": 676428600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_CHECKOUT_AS_GUEST()"
});
formatter.result({
  "duration": 2941118200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 442022500,
  "status": "passed"
});
formatter.uri("G_BillingDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Billing Details Page",
  "description": "",
  "id": "billing-details-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to fill valid Billing Details",
  "description": "",
  "id": "billing-details-page;user-should-able-to-fill-valid-billing-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cEmail\u003e\" \"\u003cCountry\u003e\" \"\u003cState\u003e\" \"\u003cCity\u003e\" \"\u003cAddress\u003e\" \"\u003cZipCode\u003e\" \"\u003cPhoneNo.\u003e\" and click on the Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "billing-details-page;user-should-able-to-fill-valid-billing-details;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "",
        "Lastname",
        "",
        "Email",
        "",
        "Country",
        "",
        "State",
        "",
        "City",
        "",
        "Address",
        "",
        "ZipCode",
        "",
        "PhoneNo."
      ],
      "line": 22,
      "id": "billing-details-page;user-should-able-to-fill-valid-billing-details;;1"
    },
    {
      "cells": [
        "Magan",
        "",
        "Patel",
        "",
        "abcabc@gmail.com",
        "",
        "United States",
        "",
        "Alaska",
        "",
        "NewYork",
        "",
        "1020 Edward Road",
        "",
        "E78LE",
        "",
        "07845120120"
      ],
      "line": 23,
      "id": "billing-details-page;user-should-able-to-fill-valid-billing-details;;2"
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
  "duration": 2337816200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1228045100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should able to fill valid Billing Details",
  "description": "",
  "id": "billing-details-page;user-should-able-to-fill-valid-billing-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"Magan\" \"Patel\" \"abcabc@gmail.com\" \"United States\" \"Alaska\" \"NewYork\" \"1020 Edward Road\" \"E78LE\" \"07845120120\" and click on the Continue button",
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
  "line": 20,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 819451700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 640045400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1237934600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3322710000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 153253500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shopping_cart_pop_up_message()"
});
formatter.result({
  "duration": 3683136500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.update_qty_again_in_shopping_cart_page()"
});
formatter.result({
  "duration": 3278072600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Update_shopping_cart()"
});
formatter.result({
  "duration": 652751300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_T_C_box()"
});
formatter.result({
  "duration": 203825500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKOUT",
      "offset": 10
    }
  ],
  "location": "Steps.click_on_button(String)"
});
formatter.result({
  "duration": 904325800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_CHECKOUT_AS_GUEST()"
});
formatter.result({
  "duration": 2935902600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magan",
      "offset": 40
    },
    {
      "val": "Patel",
      "offset": 48
    },
    {
      "val": "abcabc@gmail.com",
      "offset": 56
    },
    {
      "val": "United States",
      "offset": 75
    },
    {
      "val": "Alaska",
      "offset": 91
    },
    {
      "val": "NewYork",
      "offset": 100
    },
    {
      "val": "1020 Edward Road",
      "offset": 110
    },
    {
      "val": "E78LE",
      "offset": 129
    },
    {
      "val": "07845120120",
      "offset": 137
    }
  ],
  "location": "Steps.user_should_Enter_all_personal_details_and_click_on_the_Continue_button(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4061697700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 479758100,
  "status": "passed"
});
formatter.uri("H_ShippingMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Shipping Method Page",
  "description": "",
  "id": "shipping-method-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to click on appropriate shipping method",
  "description": "",
  "id": "shipping-method-page;user-should-able-to-click-on-appropriate-shipping-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cEmail\u003e\" \"\u003cCountry\u003e\" \"\u003cState\u003e\" \"\u003cCity\u003e\" \"\u003cAddress\u003e\" \"\u003cZipCode\u003e\" \"\u003cPhoneNo.\u003e\" and click on the Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on shipping  method and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "shipping-method-page;user-should-able-to-click-on-appropriate-shipping-method;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "",
        "Lastname",
        "",
        "Email",
        "",
        "Country",
        "",
        "State",
        "",
        "City",
        "",
        "Address",
        "",
        "ZipCode",
        "",
        "PhoneNo."
      ],
      "line": 23,
      "id": "shipping-method-page;user-should-able-to-click-on-appropriate-shipping-method;;1"
    },
    {
      "cells": [
        "Magan",
        "",
        "Patel",
        "",
        "abcabc@gmail.com",
        "",
        "United States",
        "",
        "Alaska",
        "",
        "NewYork",
        "",
        "1020 Edward Road",
        "",
        "E78LE",
        "",
        "07845120120"
      ],
      "line": 24,
      "id": "shipping-method-page;user-should-able-to-click-on-appropriate-shipping-method;;2"
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
  "duration": 2059918700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1382788500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should able to click on appropriate shipping method",
  "description": "",
  "id": "shipping-method-page;user-should-able-to-click-on-appropriate-shipping-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"Magan\" \"Patel\" \"abcabc@gmail.com\" \"United States\" \"Alaska\" \"NewYork\" \"1020 Edward Road\" \"E78LE\" \"07845120120\" and click on the Continue button",
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
  "line": 20,
  "name": "Click on shipping  method and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 1389889200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 1118094200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1789004200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3336921200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 157689600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shopping_cart_pop_up_message()"
});
formatter.result({
  "duration": 3796379100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.update_qty_again_in_shopping_cart_page()"
});
formatter.result({
  "duration": 3276406900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Update_shopping_cart()"
});
formatter.result({
  "duration": 663933500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_T_C_box()"
});
formatter.result({
  "duration": 200237900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKOUT",
      "offset": 10
    }
  ],
  "location": "Steps.click_on_button(String)"
});
formatter.result({
  "duration": 851976700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_CHECKOUT_AS_GUEST()"
});
formatter.result({
  "duration": 2964012400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magan",
      "offset": 40
    },
    {
      "val": "Patel",
      "offset": 48
    },
    {
      "val": "abcabc@gmail.com",
      "offset": 56
    },
    {
      "val": "United States",
      "offset": 75
    },
    {
      "val": "Alaska",
      "offset": 91
    },
    {
      "val": "NewYork",
      "offset": 100
    },
    {
      "val": "1020 Edward Road",
      "offset": 110
    },
    {
      "val": "E78LE",
      "offset": 129
    },
    {
      "val": "07845120120",
      "offset": 137
    }
  ],
  "location": "Steps.user_should_Enter_all_personal_details_and_click_on_the_Continue_button(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4069656000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shipping_method_and_click_on_continue()"
});
formatter.result({
  "duration": 2327024300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 486758200,
  "status": "passed"
});
formatter.uri("I_Payment.feature");
formatter.feature({
  "line": 1,
  "name": "Payment Page",
  "description": "",
  "id": "payment-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to make payment with appropriate card",
  "description": "",
  "id": "payment-page;user-should-able-to-make-payment-with-appropriate-card",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cEmail\u003e\" \"\u003cCountry\u003e\" \"\u003cState\u003e\" \"\u003cCity\u003e\" \"\u003cAddress\u003e\" \"\u003cZipCode\u003e\" \"\u003cPhoneNo.\u003e\" and click on the Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on shipping  method and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click to select the card type",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Ender all card details \"\u003cSelectCardType\u003e\" \"\u003cCardHolderName\u003e\" \"\u003cCardNo.\u003e\" \"\u003cExpMonth\u003e\" \"\u003cExpYear\u003e\" \"\u003c3DigitCode\u003e\" and click on continue and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Continue to go on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "payment-page;user-should-able-to-make-payment-with-appropriate-card;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "",
        "Lastname",
        "",
        "Email",
        "",
        "Country",
        "",
        "State",
        "",
        "City",
        "",
        "Address",
        "",
        "ZipCode",
        "",
        "PhoneNo.",
        "",
        "SelectCardType",
        "",
        "CardHolderName",
        "",
        "CardNo.",
        "",
        "ExpMonth",
        "",
        "ExpYear",
        "",
        "3DigitCode"
      ],
      "line": 26,
      "id": "payment-page;user-should-able-to-make-payment-with-appropriate-card;;1"
    },
    {
      "cells": [
        "Magan",
        "",
        "Patel",
        "",
        "abcabc@gmail.com",
        "",
        "United States",
        "",
        "Alaska",
        "",
        "NewYork",
        "",
        "1020 Edward Road",
        "",
        "E78LE",
        "",
        "07845120120",
        "",
        "Master card",
        "",
        "Magan Patel",
        "",
        "4659446678073231",
        "",
        "11",
        "",
        "2026",
        "",
        "369"
      ],
      "line": 27,
      "id": "payment-page;user-should-able-to-make-payment-with-appropriate-card;;2"
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
  "duration": 2094842600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1639279400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should able to make payment with appropriate card",
  "description": "",
  "id": "payment-page;user-should-able-to-make-payment-with-appropriate-card;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"Magan\" \"Patel\" \"abcabc@gmail.com\" \"United States\" \"Alaska\" \"NewYork\" \"1020 Edward Road\" \"E78LE\" \"07845120120\" and click on the Continue button",
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
  "line": 20,
  "name": "Click on shipping  method and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click to select the card type",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Ender all card details \"Master card\" \"Magan Patel\" \"4659446678073231\" \"11\" \"2026\" \"369\" and click on continue and confirm order",
  "matchedColumns": [
    18,
    20,
    22,
    24,
    26,
    28
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Continue to go on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 1302587900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 631991800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1327599300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3332746400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 40100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 155293200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shopping_cart_pop_up_message()"
});
formatter.result({
  "duration": 3710276800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.update_qty_again_in_shopping_cart_page()"
});
formatter.result({
  "duration": 3260553600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Update_shopping_cart()"
});
formatter.result({
  "duration": 635284700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_T_C_box()"
});
formatter.result({
  "duration": 204944600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKOUT",
      "offset": 10
    }
  ],
  "location": "Steps.click_on_button(String)"
});
formatter.result({
  "duration": 818835600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_CHECKOUT_AS_GUEST()"
});
formatter.result({
  "duration": 2954339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magan",
      "offset": 40
    },
    {
      "val": "Patel",
      "offset": 48
    },
    {
      "val": "abcabc@gmail.com",
      "offset": 56
    },
    {
      "val": "United States",
      "offset": 75
    },
    {
      "val": "Alaska",
      "offset": 91
    },
    {
      "val": "NewYork",
      "offset": 100
    },
    {
      "val": "1020 Edward Road",
      "offset": 110
    },
    {
      "val": "E78LE",
      "offset": 129
    },
    {
      "val": "07845120120",
      "offset": 137
    }
  ],
  "location": "Steps.user_should_Enter_all_personal_details_and_click_on_the_Continue_button(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4012747000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shipping_method_and_click_on_continue()"
});
formatter.result({
  "duration": 2311444800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_to_select_the_card_type()"
});
formatter.result({
  "duration": 2307985100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 24
    },
    {
      "val": "Magan Patel",
      "offset": 38
    },
    {
      "val": "4659446678073231",
      "offset": 52
    },
    {
      "val": "11",
      "offset": 71
    },
    {
      "val": "2026",
      "offset": 76
    },
    {
      "val": "369",
      "offset": 83
    }
  ],
  "location": "Steps.ender_all_card_details_and_click_on_continue_and_confirm_order(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5345595800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Continue_to_go_on_homepage()"
});
formatter.result({
  "duration": 1655147800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 428920100,
  "status": "passed"
});
formatter.uri("J_ValidateHomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Validate HomePage",
  "description": "",
  "id": "validate-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to validate homepage after successfully payment",
  "description": "",
  "id": "validate-homepage;user-should-able-to-validate-homepage-after-successfully-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cEmail\u003e\" \"\u003cCountry\u003e\" \"\u003cState\u003e\" \"\u003cCity\u003e\" \"\u003cAddress\u003e\" \"\u003cZipCode\u003e\" \"\u003cPhoneNo.\u003e\" and click on the Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on shipping  method and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click to select the card type",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Ender all card details \"\u003cSelectCardType\u003e\" \"\u003cCardHolderName\u003e\" \"\u003cCardNo.\u003e\" \"\u003cExpMonth\u003e\" \"\u003cExpYear\u003e\" \"\u003c3DigitCode\u003e\" and click on continue and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Continue to go on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Validate HomePage Title",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "validate-homepage;user-should-able-to-validate-homepage-after-successfully-payment;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "",
        "Lastname",
        "",
        "Email",
        "",
        "Country",
        "",
        "State",
        "",
        "City",
        "",
        "Address",
        "",
        "ZipCode",
        "",
        "PhoneNo.",
        "",
        "SelectCardType",
        "",
        "CardHolderName",
        "",
        "CardNo.",
        "",
        "ExpMonth",
        "",
        "ExpYear",
        "",
        "3DigitCode"
      ],
      "line": 27,
      "id": "validate-homepage;user-should-able-to-validate-homepage-after-successfully-payment;;1"
    },
    {
      "cells": [
        "Magan",
        "",
        "Patel",
        "",
        "abcabc@gmail.com",
        "",
        "United States",
        "",
        "Alaska",
        "",
        "NewYork",
        "",
        "1020 Edward Road",
        "",
        "E78LE",
        "",
        "07845120120",
        "",
        "Master card",
        "",
        "Magan Patel",
        "",
        "4659446678073231",
        "",
        "11",
        "",
        "2026",
        "",
        "369"
      ],
      "line": 28,
      "id": "validate-homepage;user-should-able-to-validate-homepage-after-successfully-payment;;2"
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
  "duration": 2133174700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_an_Url()"
});
formatter.result({
  "duration": 1554165000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should able to validate homepage after successfully payment",
  "description": "",
  "id": "validate-homepage;user-should-able-to-validate-homepage-after-successfully-payment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should able to click on Desktops",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should able to select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should clear existing qty. and enter new qty.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate qty. added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on shopping cart pop-up message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Update qty. again in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on T\u0026C box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"CHECKOUT\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on CHECKOUT AS GUEST",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should Enter all personal details \"Magan\" \"Patel\" \"abcabc@gmail.com\" \"United States\" \"Alaska\" \"NewYork\" \"1020 Edward Road\" \"E78LE\" \"07845120120\" and click on the Continue button",
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
  "line": 20,
  "name": "Click on shipping  method and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click to select the card type",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Ender all card details \"Master card\" \"Magan Patel\" \"4659446678073231\" \"11\" \"2026\" \"369\" and click on continue and confirm order",
  "matchedColumns": [
    18,
    20,
    22,
    24,
    26,
    28
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Continue to go on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Validate HomePage Title",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_click_on_Computers()"
});
formatter.result({
  "duration": 865020900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_click_on_Desktops()"
});
formatter.result({
  "duration": 697912700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_able_to_select_the_product()"
});
formatter.result({
  "duration": 1288873800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_clear_existing_qty_and_enter_new_qty()"
});
formatter.result({
  "duration": 3360238500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_qty_added_into_the_cart()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 183613900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shopping_cart_pop_up_message()"
});
formatter.result({
  "duration": 3666022500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.update_qty_again_in_shopping_cart_page()"
});
formatter.result({
  "duration": 3256755900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Update_shopping_cart()"
});
formatter.result({
  "duration": 484114400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_T_C_box()"
});
formatter.result({
  "duration": 371664900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKOUT",
      "offset": 10
    }
  ],
  "location": "Steps.click_on_button(String)"
});
formatter.result({
  "duration": 892909300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_CHECKOUT_AS_GUEST()"
});
formatter.result({
  "duration": 2914337800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Magan",
      "offset": 40
    },
    {
      "val": "Patel",
      "offset": 48
    },
    {
      "val": "abcabc@gmail.com",
      "offset": 56
    },
    {
      "val": "United States",
      "offset": 75
    },
    {
      "val": "Alaska",
      "offset": 91
    },
    {
      "val": "NewYork",
      "offset": 100
    },
    {
      "val": "1020 Edward Road",
      "offset": 110
    },
    {
      "val": "E78LE",
      "offset": 129
    },
    {
      "val": "07845120120",
      "offset": 137
    }
  ],
  "location": "Steps.user_should_Enter_all_personal_details_and_click_on_the_Continue_button(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4043724400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_shipping_method_and_click_on_continue()"
});
formatter.result({
  "duration": 2314275500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_to_select_the_card_type()"
});
formatter.result({
  "duration": 2327719600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 24
    },
    {
      "val": "Magan Patel",
      "offset": 38
    },
    {
      "val": "4659446678073231",
      "offset": 52
    },
    {
      "val": "11",
      "offset": 71
    },
    {
      "val": "2026",
      "offset": 76
    },
    {
      "val": "369",
      "offset": 83
    }
  ],
  "location": "Steps.ender_all_card_details_and_click_on_continue_and_confirm_order(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5304710800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Continue_to_go_on_homepage()"
});
formatter.result({
  "duration": 1618235800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_HomePage_Title()"
});
formatter.result({
  "duration": 3034220400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 215324600,
  "status": "passed"
});
});