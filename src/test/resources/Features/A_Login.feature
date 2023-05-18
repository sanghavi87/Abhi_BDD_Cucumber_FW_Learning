Feature: NopCommerce Login
  Background:
    Given User able to open Browser
    And Enter an Url

# Data Driven with Example keyword
  @Smoke
  Scenario Outline: Nopcommerce Valid Login Test
    When User click on Login Link
    And User on Login Page and Verify Login page Title
    Then User enter "<Username>" and "<Password>" and Click on login button
    Then User is on Home Page and Verify Home page Title
    And User close the browser
    Examples:
      | Username |Password|
      | abcd2@gmail.com|Test@123|
      | abcd3@gmail.com|Test@123|
      | abcd4@gmail.com|Test@123|