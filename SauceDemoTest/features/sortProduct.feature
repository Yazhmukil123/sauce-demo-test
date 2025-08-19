Feature: Sort and Filter Products

  Scenario: User sorts the products by price from low to high
    Given user can select "product Name (Z to A)" from the sort dropdown
    And user can select "product Name (A to z)" from the sort dropdown
    When user can selects "Price (high to low)" from the sort dropdown
    And user selects "Price (low to high)" from the sort dropdown
    Then products should be displayed in ascending order of price
