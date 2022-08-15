class AboutyouPage{

selectAboutYou ()
{return cy.get('.about > .collapse-top > .collapse-icon')}

clickArrow()
{return cy.get('.about > .collapse-top > .collapse-icon > .icon')}

enterEmail()
{return cy.get('#field_email')}

receivenews()
{return cy.get('[data-validate="opt"] > label')}

enterPhone()
{return cy.get('#field_phone')}

enterPostalAddress()
{return cy.get('#field_postal')}

firstName()
{return cy.get('#field_firstname')}

lastName()
{return cy.get('#field_lastname')}

DOB()
{return cy.get('#field_dob')}

gender()
{return cy.get('[for="gender_male"]')}













}
export default AboutyouPage ; 