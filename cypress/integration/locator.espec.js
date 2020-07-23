/// <reference types= "cypress" />

describe('Locator', ()=>{
    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(()=>{
        cy.reload();
    })

    it('JQuery selector', ()=>{
        cy.get('table#tabelaUsuarios tbody > tr > td:eq(0)').should('contain', 'Francisco')
    })

})