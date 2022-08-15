/// <reference types="Cypress" />

import SignupPage from '../../support/SignupPage'
import OfferPage from '../../support/OfferPage'

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {
    const signupPage = new SignupPage() 
    const offerPage = new OfferPage()

    // Open URL
    cy.visit(Cypress.env('URL'))
    
    signupPage.enterAddress().type('Flat12, 201 great south road, greenlane, Auckland, 1051')  
     
   signupPage.dropdownAddress().click()
  
    signupPage.wait()
    cy.intercept({
        method : 'POST',
        url : 'https://mapi.nz/moves/icp/search/'
    },

     {
         statusCode : 200,
         body : [{
            "icpAddress": "12, 201 GREAT SOUTH ROAD, GREENLANE, AUCKLAND 1051",
            "icpNumber": "0000361331QT9E1",
            "propertyName": ""    }]
          
     }).as('icpAddress')
    
    signupPage.selectAddress().click()
    cy.wait('@icpAddress')
     //.should(({request,response})=>
     
})

})





