/// <reference types= "cypress" />

const url = Cypress.config("baseUrl")

describe('Helpers...', ()=>{
    it('Wrap', ()=>{
        // Wrap serve para encapsular um objeto no cypress, para que assim possa se usar as funções cy.
        const obj = { nome: 'obj', idade: 22}
        expect(obj).to.have.property('nome')
        //Encapsulando obj

        cy.wrap(obj).should('property', 'nome')

        //....................................//

        cy.visit(url)
        cy.get('#buttonSimple').then($el =>{ //$el torna o get num object
            cy.wrap($el).click()
        })
    })

    it ('Its',()=>{
        const obj = { nome: 'obj', idade: 22}
        // o its pega diretamente uma propriedade do objeto
        cy.wrap(obj).its('nome').should('be.equal', 'obj') 

        const obj2 = { nome: 'obj', idade: 22, endereco: {rua : "do bobo"}}
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobo')
        // pode encadear também
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobo')

        cy.visit(url)
        //title é uma string 
        cy.title().its('length').should('be.equal', 20)
    })

    it('Invoke', ()=>{
        //Se o its pega propriedades o invoke pega funcoes

        const soma = (a,b) => (a+b)

        cy.wrap({fn: soma}).invoke('fn', 2, 3).should('be.equal',5)
    })
})