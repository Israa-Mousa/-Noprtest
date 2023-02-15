
import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"
import GooglePageAction from "../pageObject/googlePage/googlePageAction";
import GooglePageAssertion from "../pageObject/googlePage/googlePageAssertion";


const googlePageAction=new GooglePageAction()
///Google page  name with page 
//also assertion 
const googlePageAssertion=new GooglePageAssertion()

Given('The user on the Google page',()=>{
    googlePageAction.visitGooglePage();
})


When('The user fill the search input',()=>{
    googlePageAction.typeSearchField("Foothill solutions")
  
});

Then('The search result contains Foothill Solutions website and Facebook page ',()=>{
    googlePageAssertion.checkSearchPageResult()
});