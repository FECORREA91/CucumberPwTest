@login
Feature: User Login
  As a registered user
  I want to login to the Magento website
  So that I can access my account

  Background:
    Given I navigate to the Magento homepage

  Scenario: Successful login with valid credentials
    When I click on the "Sign In" link
    And I enter valid login credentials
    And I click the login button
    Then I should see the login success dashboard

  Scenario: Failed login with invalid credentials
    When I click on the "Sign In" link
    And I enter invalid login credentials
    And I click the login button
    Then I should see an error message