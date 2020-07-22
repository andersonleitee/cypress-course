/// <reference types= "cypress" />

it('Working with iframe', ()=>{
    cy.visit('http://wcaquino.me/cypress/componentes.html');
    cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')

            cy.wrap(body).find('#tfield')
                .type('Funcionou?')

            // cy.wrap(body).find('#otherButton').click()    
    })
})

it('Verificar frame', ()=>{
    cy.visit('http://wcaquino.me/cypress/frame.html');
    cy.get('#otherButton').click()
    
    cy.on('window:alert', win=>{
        expect(win).to.be.equal('Click OK!')
    })
})