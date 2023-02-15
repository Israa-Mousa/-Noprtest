/// <reference types="Cypress" />
class GooglPageAssertion{

    // checkfoothilinresultpage 
    //cyrpress get 
    // checkSearchPageResult(isVisible :boolean){
    //   //.should(isVisible ? "be.visible" : "not.exist" ) need to read more about it
    //     cy.get('h3').contains("Foothill Technology Solutions: Home").should('be.visible')
    //     //check if it's n't display 
    //     cy.get('[href="https://www.facebook.com/FoothillTechnologySolutions/"] > .LC20lb > span').should('be.visible')
    // }
///divide into function  
checkFoothillSolutionWebsite(isVisible:boolean=true){
  cy.get('h3').contains("Foothill Technology Solutions: Home").should(isVisible ? "be.visible" : "not.exist" ) 
}
checkFoothillSolutionFacebook(isVisible:boolean=true){
  cy.get("h3").contains("Foothill Technology Solutions | Nablus - Facebook").should(isVisible ? "be.visible" : "not.exist" ) 
}
    
}
export default GooglPageAssertion