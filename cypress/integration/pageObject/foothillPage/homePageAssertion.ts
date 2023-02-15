/// <reference types="Cypress" />
class HomePageAssertion{

checkHomeTabIsVisible(isVisible:boolean=true){
    cy.get('.nav-item').contains('Home').should(isVisible ? "be.visible" : "not.exist" ) 

}     

checkHomePage(){
    // Assertion on title
    cy.get('.nav-item').contains('Contact Us').get('.nav-item').contains('Home').click().title().should('eq','Home | Foothill Technology Solution')   
 //Assertion on element
 cy.get('.title').contains('Empowering Operators Worldwide')

}
   
}
export default HomePageAssertion