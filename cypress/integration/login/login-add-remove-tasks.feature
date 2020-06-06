Feature: Check I can sign in to AYOA Cucumber integration test

    Login form should contain fields for email address, password and login button.

    Scenario: Go to homepage and login
        Given I open the homepage
        When I click the login button in the menu
        And I enter my sign in with email credentials
        And I click the sign in button
        Then I see the landing page
   