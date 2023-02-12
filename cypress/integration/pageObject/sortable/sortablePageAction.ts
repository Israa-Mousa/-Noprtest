/// <reference types="Cypress" />
class SortablePageAction{

    visitSortablePage(){
        cy.viewport(800,900);
        cy.visit("https://sortablejs.github.io/Sortable/#simple-list")
    }
    
    printResult(){
        cy.log('The list is sortable')
    }
  


    
}
export default SortablePageAction