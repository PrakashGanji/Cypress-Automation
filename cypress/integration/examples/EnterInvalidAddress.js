describe ('Enter Invalid Address', function()
{

it ('EnterAddress', function() {

    // Scenario 1 - Enter address and click on choose button
cy.visit("https://pages.mercury.co.nz/signup");

cy.get('#field_address').type('201F Kotorenui Road, Lake Matahina 3192')  
cy.get('#suggestion_0').click()
cy.wait(1000)


cy.get('.manual-error > b').then(function(element)
{ const errormsg = element.text()
  cy.log(errormsg)
})



   // expect (errormsg.includes("We were not able to find any matches for that address")).to.be.true  })

cy.get('#manual_unit').type('12')
cy.get('#manual_number').type('201')
cy.get('#manual_street').type('Great south road, Greenlane')
cy.get('#manual_region').type('Auckland')
cy.get('#button_manual').click()

cy.get('#field_cb_firstname').type('@@@')
cy.get('#field_cb_lastname').type('Join')
cy.get('#field_cb_phone').type('1111111')
cy.get('#field_cb_email').type('@@@@@@')













})



})
