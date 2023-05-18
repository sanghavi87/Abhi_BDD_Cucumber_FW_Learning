Feature: Select Product
  Background:
    Given User able to open Browser
    And Enter an Url

    Scenario: User should able to select the product from homepage
      When User click on Computers
      Then User should able to click on Desktops
      And User should able to select the product
      Then User close the browser