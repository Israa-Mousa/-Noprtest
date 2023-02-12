/// <reference types="Cypress" />
class SearchPageAssertion{

    checkSearchPageResult(){
        cy.get('[href="https://www.foothillsolutions.com/"] > .LC20lb > span').contains("Foothill Technology Solutions: Home").should('be.visible')
        cy.get('[href="https://www.facebook.com/FoothillTechnologySolutions/"] > .LC20lb > span').should('be.visible')
    }


    
}
export default SearchPageAssertion