describe ('Sign Up Page Validations links images text', function()
{

it ('EnterAddress', function() {

    // Scenario 1 - Enter address and click on choose button
cy.visit("https://pages.mercury.co.nz/signup");

//cy.get('#field_address').type('Flat12, 201 great south road, greenlane, Auckland, 1051')  
//cy.get('#suggestion_0').click()
//cy.wait(1000)
//cy.get('[data-icp="0216636124LC51F"] > .selection-address').click()

cy.get('img').should('be.visible')
cy.get('[for="move_yes"]').should('not.be.selected')

//cy.get('[href="https://www.mercury.co.nz/help/contact-us"]').click()
cy.get('[href="https://www.mercury.co.nz/help/contact-us"]').should('have.text','Contact Us')




cy.get('[for="cust_yes"]').should('be.selected') //invalid scenario
//get('#journey_title').includes('JOIN OR MOVE WITH MERCURY')

//cy.get('#button_pricing').click()

// Select Offer and Click on Continue button

//cy.get('#cell_every_offers > .offer-card > .card-choose').click()
//cy.wait(1000)
//cy.get('#button_offers').click()

//cy.get('.af_item ').find('#suggestion_0').click()

// select first from the drop down list



//cy.get('#button_pricing').click()
//cy.wait(3000)
// select firt offer
//cy.get('#cell_every_offers > .offer-card > .card-choose').click()
//cy.wait(1000)
//cy.get('#button_offers').click()
//movein date
//cy.get('#field_movein').type('14/03/2022'). type('{enter}') 
// select address move in details
//cy.get('[for="own_own"]').click()

//cy.get('[for="access_yes"]').click()
//cy.wait(1000)
//cy.get('[for="dog_yes"]').click()
//cy.get('[for="medical_no"]').click()
//cy.wait(1000)
//cy.get('#button_extra').click()
//cy.wait(3000)

// About you
//cy.get('.about > .collapse-top > .collapse-icon').click()

//cy.get('#field_email').type('prakash@test.com')

//cy.get('[data-validate="opt"] > label').click()









})



})
