/// <reference types= "cypress" />


describe('work with alert', ()=>{
    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html');
    })

    it('Nome', ()=>{
        cy.get('#formNome').type('Anderson')
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })
    })

    it('Sobrenome', ()=>{
        cy.get('[data-cy=dataSobrenome]').type('Leite')
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
    })

    it('Sexo', ()=>{
        cy.get('#formSexoMasc').click().should('be.checked')
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        cy.get('#descNome').should('contain', 'Nome:')
        cy.get('#descSobrenome').should('contain', 'Sobrenome:')
        cy.get('#descSexo').should('contain', 'Sexo:')
        
    })




    })