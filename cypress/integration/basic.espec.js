/// <reference types= "cypress" />

describe('Cypress basic', ()=>{
    it.only('Should visit a page and assert the title', ()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html') // visita pag

        //cy.pause();

        cy.title().should('be.equal', 'Campo de Treinamento').and('contain', 'Campo')
           // .debug()

        // title() = verifica o titulo da página (que fica na aba)
        // should() = funciona como um expec, para 
        
        //Como imprimir o nome do título no console 
        let syncTitle

        cy.title().should(title =>{
            console.log(title)

            syncTitle = title
        })

        //Reutilizando o title

        cy.get('#formNome').then($el =>{
            cy.wrap($el).type(syncTitle)
        })

    })

    it('Should find and interact with an element', ()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple') // get busca elemento o # significa que vai buscar pelo ID
            .click() // clica
            .should('have.value', 'Obrigado!')
            
    })

})

