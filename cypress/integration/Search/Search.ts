
import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

import SearchPageAction from "../pageObject/search/searchPageAction";
import SearchPageAssertion from "../pageObject/search/searchPageAssertion";

const searchPageAction=new SearchPageAction()
const searchPageAssertion=new SearchPageAssertion()

Given('The user on the Google page',()=>{
    searchPageAction.visitGooglePage();
})


When('The user fill the search input',()=>{
    searchPageAction.typeSearchField("Foothill solutions")
  
});

Then('The seacrh result conatins Foothill Solutions website and Facebook page ',()=>{
    searchPageAssertion.checkSearchPageResult()
   
});