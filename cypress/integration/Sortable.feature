Feature: Check the list is sortable

  Scenario: Valid Sortable link
    Given The user on the sortable page
    When  The user see The list 
    And The list is sortable
    Then The list should be sortable 