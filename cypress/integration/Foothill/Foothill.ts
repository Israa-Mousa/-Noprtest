import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"
import FoothillPageAction from "../pageObject/foothillPage/foothillPageAction";
import FoothillPageAssertion from "../pageObject/foothillPage/foothillPageAssertion";

const foothillPageAction=new FoothillPageAction()
const foothillPageAssertion=new FoothillPageAssertion()

Given('The user on the foothill page',()=>{
    foothillPageAction.visitFoothillPage();
})


When('The user see four tabs',()=>{
    foothillPageAssertion.checkFoothillTabsVisibility()
  
});

Then('The user click on tabs and change the page',()=>{
    foothillPageAssertion.checkFoothillPageOpenSuccessfully()
   
});