import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"
import { constant } from "cypress/types/lodash";
import AboutUsPageAction from "../pageObject/foothillPage/aboutusPageAction";
import AboutUsPageAssertion from "../pageObject/foothillPage/aboutusPageAssertion";
import CareersPageAction from "../pageObject/foothillPage/careersPageAction";
import CareersPageAssertion from "../pageObject/foothillPage/careersPageAssertion";
import ContactUsPageAction from "../pageObject/foothillPage/contactusPageAction";
import ContactUsPageAssertion from "../pageObject/foothillPage/contactusPageAssertion";
import FoothillPageAction from "../pageObject/foothillPage/foothillPageAction";
import FoothillPageAssertion from "../pageObject/foothillPage/foothillPageAssertion";
import HomePageAction from "../pageObject/foothillPage/homePageAction";
import HomePageAssertion from "../pageObject/foothillPage/homePageAssertion";

const foothillPageAction=new FoothillPageAction()
const foothillPageAssertion=new FoothillPageAssertion()
const homePageAction= new HomePageAction()
const homePageAssertion=new HomePageAssertion()
const careersPageAction=new CareersPageAction()
const careersPageAssertion=new CareersPageAssertion()
const aboutUsPageAction=new AboutUsPageAction()
const aboutUsPageAssertion=new AboutUsPageAssertion()
const contactUsPageAssertion=new ContactUsPageAssertion()
const contactUsPageAction=new ContactUsPageAction()

/// move page object folder out of integration not allow me
Given('The user on the foothill page',()=>{
    foothillPageAction.visitFoothillPage();
})

//when contain the action 
When('The user see four tabs',()=>{
    foothillPageAssertion.checkFoothillPageOpenSuccessfully()
});

// Then('The user click on tabs and change the page',()=>{
//     foothillPageAssertion.checkFoothillPageOpenSuccessfully()
   
// });

When('The user Navigate Home tab',()=>{
    homePageAction.clickOnHomeTab()
});

Then('The Homepage will open',()=>{
    homePageAssertion.checkHomeTabIsVisible()
    homePageAssertion.checkHomePage()
    // homePageAction.clickOnHomeTab()
});


When('The user Navigate About us tab',()=>{
    aboutUsPageAction.clickOnAboutUsTab()
});

Then('The About us page will open',()=>{
    aboutUsPageAssertion.checkAboutUsTabIsVisible()
    aboutUsPageAssertion.checkAboutUsPage()

});


When('The user Navigate Careers tab',()=>{
    careersPageAction.clickOnCareersTab()
});

Then('The Careers page will open',()=>{
    careersPageAssertion.checkCareersTabIsVisible()
    careersPageAssertion.checkCareersPage()
});


When('The user Navigate Contact us tab',()=>{
    contactUsPageAction.clickOnContactUsTab()
});

Then('The Contact us page will open',()=>{
    contactUsPageAssertion.checkAboutUsTabIsVisible()
    contactUsPageAssertion.checkContactUsPage()
});