Feature: Billing Details Page
  Background:
    Given User able to open Browser
    And Enter an Url

  Scenario Outline: User should able to fill valid Billing Details
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
    Then Click on CHECKOUT AS GUEST
    Then User should Enter all personal details "<Firstname>" "<Lastname>" "<Email>" "<Country>" "<State>" "<City>" "<Address>" "<ZipCode>" "<PhoneNo.>" and click on the Continue button
    Then User close the browser
    Examples:
    |Firstname| |Lastname| |Email| |Country| |State| |City| |Address| |ZipCode| |PhoneNo.|
    |Magan| |Patel| |abcabc@gmail.com| |United States| |Alaska| |NewYork| |1020 Edward Road| |E78LE| |07845120120|