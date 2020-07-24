/// <reference types= "cypress" />

describe('Locator', ()=>{
    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(()=>{
        cy.reload();
    })

    it('JQuery selector', ()=>{
<<<<<<< HEAD
        cy.get('table#tabelaUsuarios tbody > tr > td:eq(0)').should('contain', 'Francisco')
=======
        cy.get('table#tabelaUsuarios tbody tr td:eq(6) input').type('Anderson')
    })

    it ('Using xpath', ()=>{
        cy.xpath('//input')
>>>>>>> @alcd/alterations
    })

})