/// <reference types="Cypress" />
//shpould be ts
//all folder should be camel case
class HomePageAction{

    waitHomeLoading(){
        //https://admin-demo.nopcommerce.com/Admin  url and other thing 
        cy.get(':nth-child(1) > .card > .card-header > .float-left').should('be.visible') 
        //alias wait network service catch of request
        // cy.url().should('eq','https://admin-demo.nopcommerce.com/Admin')

    }
    
  
}
export default HomePageAction