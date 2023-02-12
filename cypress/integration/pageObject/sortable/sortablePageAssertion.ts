/// <reference types="Cypress" />
class SortablePageAssertion{

  checkSortablePageListVisibility(){
   cy.get('#example1').should('be.visible')
  }

  checkSotrablelist(){

    cy.get('.list-group-item').should(items=>{
        expect(items[0]).to.contain.text('Item 1')
        expect(items[1]).to.contain.text('Item 2')
        expect(items[2]).to.contain.text('Item 3')
        expect(items[3]).to.contain.text('Item 4')
        expect(items[4]).to.contain.text('Item 5')
        expect(items[15]).to.contain.text('Item 6')
      })
  }


    
}
export default SortablePageAssertion