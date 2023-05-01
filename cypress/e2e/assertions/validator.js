export class ValidateByImplicitAssertion{

    containText(cyobj, text){
        cyobj.wait(1000).should('contain', text)
    }

    inputFieldIsFreezed(cyobj){
        cyobj.should('be.disabled')
    }

    inputFieldIsUnFreezed(cyobj){
        cyobj.should('be.enabled')
    }

    getTextOfAnyObj(cyobj){
        cy.get(cyobj).wait(2000).invoke('text').then(text => {
            cy.log(text) //logs the text
        })
    }

    buttonIsFreezed(cyobj){
        cyobj.wait(1000).should('be.disabled')
    }

    buttonIsUnFreezed(cyobj){
        cyobj.wait(1000).should('be.enabled')
    }

    requestIntercept(method, path, alias){
        cy.intercept({
            method: method,
            url: path,
          }).as(alias)
    }

    verifyStatusCodeWithInterceptor(alias, code ){
        cy.wait(alias).then((interception) => {
            expect(interception.response.statusCode).to.eq(code);
        })
    }

    verifyRequestPayloadWithInterceptor(alias, code ){
        cy.wait(alias).then((interception) => {
            expect(interception.request.payload.get('captcha')).to.eq(code);
        })
    }


    makeRequest(method, baseUrl, payload){
        return cy.request( {method: method,
            url: baseUrl,
            body: payload
        }) 
    }

    validateStatusCode(cyobj, code){
        cyobj.then((response) => {
            expect(response.body).to.have.property('code', code);
     })
    }

    validateResponseBody(cyobj, expectedResp){
        cyobj.then((response) => {
            expect(response.body).to.have.property('code', code);
     })
    }

    validateResponseBody(cyobj, expecTitle){
        cyobj.then((response) => {
            expect(response.body).has.property('title',expecTitle); 
     })
    }
}