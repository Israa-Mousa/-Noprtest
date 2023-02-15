
/// <reference types="Cypress" />
class ContactUsPageAssertion{

    checkAboutUsTabIsVisible(isVisible:boolean=true){
        cy.get('.nav-item').contains('Contact Us').should(isVisible ? "be.visible" : "not.exist" ) 
    
    }     
    
    checkContactUsPage(){
        // Assertion on title
        cy.get('.nav-item').contains('Contact Us').title().should('eq','Contact Us | Foothill Technology Solutions') 
     //Assertion on element
     cy.get('.title').contains('Get In Touch With Us')
    }
    
     
        
    }
    export default ContactUsPageAssertion