describe ('Request Call back test', function()
{

it ('EnterAddress', function() {

    // Scenario 1 - Enter address and click on choose button
cy.visit("https://pages.mercury.co.nz/signup");

cy.get('#field_address').type('aaaaa')
cy.get('#address_footer').invoke('show')
cy.get('#address_footer > [data-target="callback"]').click()
cy.get('#field_cb_firstname').type('Requestcallbackfirstname')
cy.get('#field_cb_lastname').type('RequestcallbackLastname')
cy.get('#field_cb_phone').type('09888888')
cy.get('#field_cb_email').type('test@gmail.com')
cy.wait(2000)
cy.get('#popup_callback > .popup-holder > .popup-close > .icon').click()
//cy.get('#address_footer > .icp-entry-toggle').click()
//cy.get('#field_icp').type('0248175300LCDD1')





//cy.get('#pre_address').invoke('show')
//cy.contains('request a call back').click() // to click on visible element on pop up
//cy.contains('Top').click({force: true}) // to click on invisible element 
//cy.url().should('include','top')

//cy.get('#suggestion_0').click()
//cy.wait(1000)
//cy.get('[data-icp="0216636124LC51F"] > .selection-address').click()

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
