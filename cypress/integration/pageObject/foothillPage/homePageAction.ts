/// <reference types="Cypress" />
class HomePageAction{

  clickOnHomeTab(){
    cy.get('.nav-item').contains('Home').click()
  }     


    
}
export default HomePageAction