/// <reference types= "cypress" />

describe('Verificação de popup', ()=>{
    it('Verificar frame', ()=>{
    cy.visit('http://wcaquino.me/cypress/frame.html');
    cy.get('#otherButton').click()
    
    cy.on('window:alert', win=>{
        expect(win).to.be.equal('Click OK!')
        })
    })

    it('Verificar se popup abriu',()=>{
    cy.visit('http://wcaquino.me/cypress/componentes.html');
    cy.window().then(win =>{
        cy.stub(win,'open').as('winOpen')
    })
    cy.get('#buttonPopUp').click()
    cy.get('@winOpen').should('be.called')

    })
})
