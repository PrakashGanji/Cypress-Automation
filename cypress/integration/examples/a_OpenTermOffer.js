
import SignupPage from '../../support/SignupPage'
import OfferPage from '../../support/OfferPage'
import AboutyouPage from '../../support/AboutyouPage'
import IdPage from '../../support/IdPage'
describe ('Select Open Term Offer', function()
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

    // Open URL
    cy.visit(Cypress.env('URL'))
    
    signupPage.enterAddress().type('Flat12, 201 great south road, greenlane, Auckland, 1051')  
   
    
    signupPage.dropdownAddress().click()
  
    
    signupPage.wait()


   // select address
    signupPage.selectAddress().click()


    signupPage.clickContinue().click()
    
    
    
    // Select Offer and Click on Continue button
    offerPage.selectOToffer().click()

 
     offerPage.wait()
    
  

    offerPage.selectContinue().click()
  

//movein date

offerPage.moveinDate().type('14/03/2022'). type('{enter}')


offerPage.own().click()


offerPage.meter().click()


offerPage.wait()

offerPage.dog().click()



offerPage.medical().click()

offerPage.wait

offerPage.continue().click()

cy.wait(3000)

// ABOUT YOU


aboutyouPage.selectAboutYou().click()



aboutyouPage.clickArrow().click()


aboutyouPage.enterEmail().type('prakash@test.com')


aboutyouPage.receivenews().click()


aboutyouPage.enterPhone().type('333333')


aboutyouPage.enterPostalAddress().type('Flat12, 201 great south road, greenlane, Auckland, 1051')



cy.get('.af_item').each(($el, index, $list) => {
    if($el.text()==='Flat12, 201 great south road, greenlane, Auckland, 1051')
    {
        cy.wrap($el).click()
    }
})




aboutyouPage.firstName().type('prakash')


aboutyouPage.lastName().type('cypress')


aboutyouPage.DOB().type('12/12/2000').type('{enter}') 


aboutyouPage.gender().click()


// ID Details

idPage.enterLicenceNumber().type('ab121212')

idPage.enterLicenceVersion().type('111')


idPage.givePermission().click()


idPage.acceptTC().click()


 



})



})
