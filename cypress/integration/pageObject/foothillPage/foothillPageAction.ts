/// <reference types="Cypress" />
class FoothillPageAction{

    visitFoothillPage(){
        cy.viewport(800,800)
        cy.visit("https://www.foothillsolutions.com/")
    }

    
}
export default FoothillPageAction