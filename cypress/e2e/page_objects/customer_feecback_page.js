import { create, all } from 'mathjs'

const math = create(all,  {})

export class CustomerFeedbackPage{

    pageHeader = 'h1';
    authorInputTextField = '#mat-input-1';
    commentInputTextField = '#comment';
    charLimitHint = '#mat-hint-1';
    sliderThumb = '.mat-slider-thumb';
    ratePostion_xpath = '//span[@class="mat-slider-thumb-label-text"]';
    captchaExpression = '#captcha'
    captchaResultTnputField = '#captchaControl'
    submitButton = '#submitButton'
    captchaUIError = '#mat-error-2'
    wrongIntegerCaptchaErrMsgPop = '.mat-simple-snack-bar-content'

    clickOnPageHeader(){
        cy.get(this.pageHeader).click().wait(1000)
    }

    getPageHeader(){
        return cy.get(this.pageHeader)
    }

    getAuthorInputTextField(){
        return cy.get(this.authorInputTextField)
    }

    getCommentInputTextField(){
        return cy.get(this.commentInputTextField)
    }

    enterTextIntoInputField(cyobj, text){
        cyobj.click().type(text)
    }

    getCharLimitHintInComment(){
        return cy.get(this.charLimitHint)
    }

    clickOnSliderThumb(num){
        cy.get(this.sliderThumb).click({force: true})
        let repeater = "{rightarrow}"
        for (let i = 0; i < num-2; i++) {
            repeater += "{rightarrow}";
        }
        cy.get(this.sliderThumb).type(
            repeater).wait(1000)
    }

    getCurrentPositionOfSliderObj(){
        return cy.xpath(this.ratePostion_xpath)
    }

    getCaptchaResultTextInputField(){
        return cy.get(this.captchaResultTnputField)
    }

    enterCaptchaTextComputedAnswer(){
        cy.get(this.captchaExpression, {timeout: 2000})
            .invoke('text')
            .then(text=>{
                cy.log(text)
                cy.log(math.evaluate(text))
                this.enterTextIntoInputField(this.getCaptchaResultTextInputField(), math.evaluate(text))
                // return text
            })
    }

    getSubmitButtonField(){
        return cy.get(this.submitButton)
    }

    clickSubmit(){
        cy.get(this.submitButton).wait(1000).click()
    }

    getUIErrorMessageOnInvalidCaptchaType(){
        return cy.get(this.captchaUIError)
    }

    getUIMessageOnSubmittingCaptchaCode(){
        return cy.get(this.wrongIntegerCaptchaErrMsgPop)
    }
}