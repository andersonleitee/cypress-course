/// <reference types= "cypress" />

describe('Sincron...', ()=>{
    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(()=>{
        cy.reload();
    })

    it('Deve aguardar', ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('be.not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Existe')
    })

    it('Find', ()=>{
        cy.get('#buttonList').click();
        cy.get('#lista li ').find('span').should('contain','Item 1')

        cy.get('#lista li span ').should('contain','Item 2')
    })


    it('Click retry', ()=>{
        cy.get('#buttonCount').click()
            .should('have.value', '1')
    })


})