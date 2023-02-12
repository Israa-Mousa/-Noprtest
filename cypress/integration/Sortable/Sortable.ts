
import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

import SortablePageAction from "../pageObject/sortable/sortablePageAction";
import SortablePageAssertion from "../pageObject/sortable/sortablePageAssertion";

const sortablePageAction=new SortablePageAction()
const sortablePageAssertion=new SortablePageAssertion()

Given('The user on the sortable page',()=>{
    sortablePageAction.visitSortablePage();
})


When('The user see The list',()=>{
    sortablePageAssertion.checkSortablePageListVisibility()
});
When('The list is sortable',()=>{
    sortablePageAssertion.checkSotrablelist()
});

Then('The list should be sortable',()=>{
    sortablePageAction.printResult()
   
});