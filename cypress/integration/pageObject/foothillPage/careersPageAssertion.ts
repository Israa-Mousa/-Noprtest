/// <reference types="Cypress" />
class CareersPageAssertion{

    checkCareersTabIsVisible(isVisible:boolean=true){
        cy.get('.nav-item').contains('Careers').should(isVisible ? "be.visible" : "not.exist" ) 
     
    }     
    
    checkCareersPage(){
        // Assertion on title
        cy.get('.nav-item').contains('Careers').title().should('eq','About | Foothill Technology Solutions')   
     //Assertion on element
     cy.get('.main-title').contains('Grow with Us')
    }
    
     


    
}
export default CareersPageAssertion