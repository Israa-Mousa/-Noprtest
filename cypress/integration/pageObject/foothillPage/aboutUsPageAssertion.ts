
/// <reference types="Cypress" />
class AboutUsPageAssertion{

checkAboutUsTabIsVisible(isVisible:boolean=true){
    cy.get('.nav-item').contains('Home').should(isVisible ? "be.visible" : "not.exist" ) 

}     

checkAboutUsPage(){
    // Assertion on title
    cy.get('.nav-item').contains('Home').title().should('eq','Careers | Foothill Technology Solutions')  
 //Assertion on element
 cy.get('.AboutTitle').contains('Grow with Us')
}

 
    
}
export default AboutUsPageAssertion