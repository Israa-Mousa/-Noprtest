/// <reference types="Cypress" />
class GooglePageAction{

    visitGooglePage(){
        // cy.viewport(800,900); not needed
        cy.visit("https://www.google.com/")
    }
    
    //In missed
    typeInSearchField( value:string){
        cy.get('input[name="q"]').clear().type(value)
        return this;
        }
    
        //click on google search button Google Search
        clickOnGoogleSearchButton(){
            cy.get('.FPdoLc > center > .gNO89b').click()
            // cy.get('input[name="btnK"]').click({multiple:true})
            // cy.wait(1000) assertion on some  elemnt dsiplayed wait task it's imoprtant
            return this;
           }


    
}
export default GooglePageAction