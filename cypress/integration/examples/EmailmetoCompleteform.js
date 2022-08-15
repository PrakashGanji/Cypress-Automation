describe ('Email User to complete form', function()
{

it ('Select Offer', function() {

cy.visit("https://pages.mercury.co.nz/signup");
cy.wait(2000)
cy.get('#button_save').click()
cy.get('#field_save_email').type('test')
cy.get('#button_save_submit').click()
cy.get('.error-message').then(function(element)
{
   const actualText=element.text()
   //cy.log(actualText)
  expect(actualText.includes("Invalid email address")).to.be.true
})



})


})
