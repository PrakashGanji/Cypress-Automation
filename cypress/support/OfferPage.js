class OfferPage {

    selectOToffer()
    {return cy.get('#cell_every_offers > .offer-card > .card-choose')}

    selectFToffer()
    {return cy.get('#cell_fixed1_offers > .offer-card > .card-choose').click()}

    wait()
{ return cy.wait(1500) }


selectContinue()
{return cy.get('#button_offers')}


moveinDate()
{return cy.get('#field_movein')}

own()
{return cy.get('[for="own_own"]')}

meter()
{return cy.get('[for="access_yes"]')}

dog()
{return cy.get('[for="dog_yes"]')}

medical()
{return cy.get('[for="medical_no"]')}

continue()
{return cy.get('#button_extra')}

























}
export default OfferPage ; 