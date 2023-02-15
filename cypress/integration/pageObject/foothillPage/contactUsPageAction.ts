/// <reference types="Cypress" />
class ContactUsPageAction{

    clickOnContactUsTab(){
        cy.get('.nav-item').contains('Contact Us').click()
      }   
 

    
}
export default ContactUsPageAction