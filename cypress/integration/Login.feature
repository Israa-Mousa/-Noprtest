Feature: Login

  Scenario: Login to admin
    Given go to admin page
    When fill in 
         |username |password|
         |admin@yourstore.com|admin|
    And click Log in button
    Then title changed "dashbaord"