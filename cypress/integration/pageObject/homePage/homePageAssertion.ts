/// <reference types="Cypress" />
//shpould be ts
//all folder should be camel case
class HomePageAssertion{

    checkHomePageOpenSuccessfully(){
        //https://admin-demo.nopcommerce.com/Admin  url and other thing 
        cy.url().should('eq','https://admin-demo.nopcommerce.com/Admin')

    }
    
  
}
export default HomePageAssertion