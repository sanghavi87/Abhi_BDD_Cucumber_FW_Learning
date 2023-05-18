Feature: Add To Cart
  Background:
    Given User able to open Browser
    And Enter an Url

  Scenario: User should able to add the product into the cart
    When User click on Computers
    Then User should able to click on Desktops
    And User should able to select the product
    Then User should clear existing qty. and enter new qty.
    Then Validate qty. added into the cart
    Then Click on add to cart button
    Then User close the browser