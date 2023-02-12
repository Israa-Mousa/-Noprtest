/// <reference types="Cypress" />
class SearchPageAction{

    visitGooglePage(){
        cy.viewport(800,900);
        cy.visit("https://www.google.com/")
    }
    
    typeSearchField( input:string){
        cy.get('input[name="q"]').clear().type(input)
        return this;
        }
    
        clickEnter(){
            cy.get('input[name="q"]').type('{enter}')
            cy.wait(1000)
            return this;
           }


    
}
export default SearchPageAction