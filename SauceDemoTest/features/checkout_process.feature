Feature: Product Checkout

  Scenario: User completes the checkout process
    Given ser adds a product to the cart
    When user goes to the checkout page via shoping cart
    And user should enter correct checkout information
    Then user should be able to finish and goto order confirmation page