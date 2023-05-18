Feature: Payment Page
  Background:
    Given User able to open Browser
    And Enter an Url

  Scenario Outline: User should able to make payment with appropriate card
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
    Then Click on shipping  method and click on continue
    Then Click to select the card type
    Then Ender all card details "<SelectCardType>" "<CardHolderName>" "<CardNo.>" "<ExpMonth>" "<ExpYear>" "<3DigitCode>" and click on continue and confirm order
    Then Click on Continue to go on homepage
    Then User close the browser
    Examples:
      |Firstname| |Lastname| |Email| |Country| |State| |City| |Address| |ZipCode| |PhoneNo.||SelectCardType| |CardHolderName| |CardNo.| |ExpMonth| |ExpYear| |3DigitCode|
      |Magan| |Patel| |abcabc@gmail.com| |United States| |Alaska| |NewYork| |1020 Edward Road| |E78LE| |07845120120| |Master card| |Magan Patel| |4659446678073231| |11| |2026| |369|
