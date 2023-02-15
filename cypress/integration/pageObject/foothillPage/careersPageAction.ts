/// <reference types="Cypress" />
class CareersPageAction{

     
  clickOnCareersTab(){
    cy.get('.nav-item').find('a').contains("Careers").click()
  }   
    
}
export default CareersPageAction