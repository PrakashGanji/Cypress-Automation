class SignupPage {

enterAddress() 
{      return cy.get('#field_address')   }

dropdownAddress()
{  return cy.get('#suggestion_0')  }


wait()
{ return cy.wait(1000) }


selectAddress()
{return cy.get('[data-icp="0216636124LC51F"] > .selection-address')}


clickContinue()
{return cy.get('#button_pricing')}


MercuryLogo()
{return cy.get('img')}

MoveYes()
{return cy.get('[for="move_yes"]')}

EmailmeButton()
{return cy.get('#button_save')}


}

export default SignupPage ; 