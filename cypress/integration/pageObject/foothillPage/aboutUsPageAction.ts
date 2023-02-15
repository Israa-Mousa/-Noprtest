/// <reference types="Cypress" />
class AboutUsPageAction{


    clickOnAboutUsTab(){
        cy.get('.nav-item').find('a').contains("About Us").click()
        
      }   
}
export default AboutUsPageAction