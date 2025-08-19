Feature: User Login

  Scenario: login with valid and invalid credentials
    Given user go to login page
    When user login process as enter username and password then click login button
    Then user should be navigate to the products page and see list