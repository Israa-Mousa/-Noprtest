Feature: Validate foothill page has the Homepage, About us page, Careers page and Contact us page
  
  Background: 
    Given The User visit foothill page

  Scenario: Check home Tab is exist and redirect to Homepage 
    When The user Navigate Home tab
    Then The Homepage will open

  Scenario: Check about us Tab is exist and redirect to About us page 
    When The user Navigate About us tab
    Then The About us page will open
  
  
  Scenario: Check Careers Tab is exist and redirect to Careers page 
    When The user Navigate Careers tab
    Then The Careers page will open

   Scenario: Check contact us Tab is exist and redirect to Contact us  page 
    When The user Navigate Contact us tab
    Then The Contact us page will open  