/// <reference types="Cypress" />
//shpould be ts
//all folder should be camel case
class FoothillPageAssertion{
    
    checkFoothillPageOpenSuccessfully(){
        // cy.url().contains('https://www.foothillsolutions.com/')
        cy.url().should('eq','https://www.foothillsolutions.com/')
        cy.get('.navbar').should('be.visible')

    }
    // checkFoothillTabsVisibility(){
    //     cy.get('.nav-item').find('a').contains("Home").should('be.visible').click()
    //     cy.get('.nav-item').find('a').contains("About Us").should('be.visible')
    //     cy.get('.nav-item').find('a').contains("Careers").should('be.visible')
    //     cy.get('.nav-item').find('a').contains("Contact Us").should('be.visible')
    // }
    // checkFoothillPageOpenSuccessfully1(){
    //     //url and element change 
    //     cy.get('.nav-item').contains('Home').click().title().should('eq','Home | Foothill Technology Solutions')
    //     cy.get('.nav-item').contains('About Us').click().title().should('eq','About | Foothill Technology Solutions')
    //     cy.get('.nav-item').contains('Careers').click().title().should('eq','Careers | Foothill Technology Solutions')
    //     cy.get('.nav-item').contains('Contact Us').click().title().should('eq','Contact Us | Foothill Technology Solutions')
    // }
}
export default FoothillPageAssertion