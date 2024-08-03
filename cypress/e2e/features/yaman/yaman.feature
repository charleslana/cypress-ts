Feature: yaman contact
  Scenario: send contact
    Given I visit app
    When I click contact menu
    When I fill name
    When I fill email
    When I fill subject
    When I fill message
    When I click send button
    Then I should see a success message

  Scenario: viewport mobile
    Given I visit app with viewport mobile
    When I visit app
    Then I should see a mobile menu
