Feature: Computer Database Gatling
  Scenario: Adding a new computer
    Given I visit the Computer Database page
    When I click add a new computer button
    And I fill in all the information needed for a new computer
    And I click Create this computer
    Then Computer should be registered
    Then Computer should be in the list

  Scenario: Filter 'ASCI' computer from the listed results
    Given I visit the Computer Database page 
    When I search 'ASCI' in the listed computer
    Then I will see the list of ASCI computers