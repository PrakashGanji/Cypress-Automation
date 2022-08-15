
import SignupPage from '../../support/SignupPage'
import OfferPage from '../../support/OfferPage'
import AboutyouPage from '../../support/AboutyouPage'
import IdPage from '../../support/IdPage'
describe ('Id Check', function()
{
    before(() => {
        // root-level hook - runs once before all tests
        cy.fixture('example').then(function(data)
        {
          this.data = data
        })

      })

it ('Select Offer', function() {

    const signupPage = new SignupPage() 
    const offerPage = new OfferPage()
    const aboutyouPage = new AboutyouPage()
    const idPage = new IdPage()


    cy.visit("https://pages.mercury.co.nz/signup");

    signupPage.enterAddress().type('Flat12, 201 great south road, greenlane, Auckland, 1051')  
    //cy.get('#field_address').type('Flat12, 201 great south road, greenlane, Auckland, 1051')  
    
    signupPage.dropdownAddress().click()
    //cy.get('#suggestion_0').click()
    
    signupPage.wait()


   // select address
    signupPage.selectAddress().click()

   // click continue button
    signupPage.clickContinue().click()
    // cy.get('#button_pricing').click()
    
    
    // Select Offer and Click on Continue button
    offerPage.selectOToffer().click()
     //cy.get('#cell_every_offers > .offer-card > .card-choose').click()
 
     offerPage.wait()
    
    // cy.wait(1000)

    offerPage.selectContinue().click()
    //cy.get('#button_offers').click()

//movein date

offerPage.moveinDate().type('14/03/2022'). type('{enter}')
//cy.get('#field_movein').type('14/03/2022'). type('{enter}') 

//select address move in details
offerPage.own().click()
//cy.get('[for="own_own"]').click()

offerPage.meter().click()
//cy.get('[for="access_yes"]').click()

offerPage.wait()

offerPage.dog().click()

//cy.get('[for="dog_yes"]').click()


offerPage.medical().click()
//cy.get('[for="medical_no"]').click()
offerPage.wait

offerPage.continue().click()
//cy.get('#button_extra').click()
cy.wait(3000)

// ABOUT YOU
aboutyouPage.selectAboutYou().click()
//cy.get('.about > .collapse-top > .collapse-icon').click()


aboutyouPage.clickArrow().click()
//cy.get('.about > .collapse-top > .collapse-icon > .icon').click()

aboutyouPage.enterEmail().type('prakash@test.com')
//cy.get('#field_email').type('prakash@test.com')

aboutyouPage.receivenews().click()
//cy.get('[data-validate="opt"] > label').click()

aboutyouPage.enterPhone().type('333333')
//cy.get('#field_phone').type('333333')

aboutyouPage.enterPostalAddress().type('Flat12, 201 great south road, greenlane, Auckland, 1051')

// cy.get('#field_postal').type('Flat12, 201 great south road, greenlane, Auckland, 1051')

cy.get('.af_item').each(($el, index, $list) => {
    if($el.text()==='Flat12, 201 great south road, greenlane, Auckland, 1051')
    {
        cy.wrap($el).click()
    }
})

//cy.wait(1000)

//id 
//aboutyouPage.firstName().type('prakash')
//cy.get('#field_firstname').type('prakash')

//aboutyouPage.lastName().type('cypress')
//cy.get('#field_lastname').type('cypress')

//aboutyouPage.DOB().type('12/12/2000').type('{enter}') 
//cy.get('#field_dob').type('12/12/2000').type('{enter}') 

//aboutyouPage.gender().click()
//cy.get('[for="gender_male"]').click()

//cy.get('[for="check_licence"]').should('be.selected')

//ID
//idPage.enterLicenceNumber().type('ab121212')
//cy.get('#field_licence_number').type('ab121212')
//idPage.enterLicenceVersion().type('111')
//cy.get('#field_licence_version').type('111')

//idPage.givePermission().click()
//cy.get('#section_about_check > [data-type="checkbox"] > .checkbox').click()

//idPage.acceptTC().click()
//cy.get('.content-single > .form-question > .checkbox').click()



 



})



})
