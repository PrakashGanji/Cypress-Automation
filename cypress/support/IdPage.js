class IdPage{

enterLicenceNumber()
{return cy.get('#field_licence_number')}

enterLicenceVersion()
{return cy.get('#field_licence_version')}

givePermission()
{return cy.get('#section_about_check > [data-type="checkbox"] > .checkbox')}

acceptTC()
{return cy.get('.content-single > .form-question > .checkbox')}



}

export default IdPage;