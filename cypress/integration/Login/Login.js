import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

Given(' A user open the login page Admin',()=>{
    cy.visit("/")
})
When('fill in',(data)=>{
    data.hashes().array.forEach(element => {
        cy.get("#Email").type(element.username)
        cy.get("#Password").type(element.password)

    });
})
When('click Log in button',()=>{
    cy.get('.button1').should('be.visible').click()
}
)
Then('{string} should be shown',(content)=>{
cy.title().should('eq',content).wait(1000)

})