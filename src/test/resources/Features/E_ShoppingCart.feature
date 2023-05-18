Feature: Shopping Cart Page
  Background:
    Given User able to open Browser
    And Enter an Url

  Scenario: User should able to amend and update Shopping cart
    When User click on Computers
    Then User should able to click on Desktops
    And User should able to select the product
    Then User should clear existing qty. and enter new qty.
    Then Validate qty. added into the cart
    Then Click on add to cart button
    Then Click on shopping cart pop-up message
    Then Update qty. again in shopping cart page
    And  Click on Update shopping cart
    And Click on T&C box
    Then Click on "CHECKOUT" button
    Then User close the browser