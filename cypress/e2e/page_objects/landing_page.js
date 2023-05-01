export class LandingPage{

    popUpClose_xpath = '//button[@aria-label="Close Welcome Banner"]';
    drawerMenu_xpath = '//button[@aria-label="Open Sidenav"]';
    customerFeedbackPage_xpath = '//a[@aria-label="Go to contact us page"]';
    cookiePopUp = '.cc-btn';

    goToLandingPage(url){
        cy.visit(url)
    }
    closePopUp(){
        cy.xpath(this.popUpClose_xpath).click()
    }
    clickDrawerMenu(){
        cy.xpath(this.drawerMenu_xpath).click()
    }
    goToCustomerFeedbackPage(){
        cy.xpath(this.customerFeedbackPage_xpath).click()
    }
    clickAcceptCookie(){
        cy.get(this.cookiePopUp).click()
    }
}