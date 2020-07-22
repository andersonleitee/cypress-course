/// <reference types= "cypress" />

describe('work with basic elements', ()=>{
    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(()=>{
        cy.reload();
    })


    it('text', ()=>{
        
        cy.get('body').should('contain','Cuidado'); //verifica na tag body do html
        cy.get('span').should('contain','Cuidado'); //verifica na tag sapn do html
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
        //Verifica atraves da classe facilAchar do css, o '.' sig classe
        cy.get('#resultado').should('have.text', 'Status: Nao cadastrado')
    })


    it('link', ()=>{
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        // cy.pause();
        // cy.reload(); Essa função é possivel recarregar a página

        //Outra maneira de encontrar um elemento é utilizando o contain (porém n mt seguro)
    })

    it.only('Textfield', ()=>{
        cy.get('#formNome').type('Cypress test');
        cy.get('#formNome').should('have.value','Cypress test');

        cy.get('#elementosForm\\:sugestoes') //O cypress sugeriu com uma'\' a menos, deu problema usando duas ele não deu por conta dos ':' 
         .type('Test area').should('have.value', 'Test area').pause(); 

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
         .type('????')

        cy.get('#elementosForm\\:sugestoes').clear()
         .type('Erro{selectall}Acerto')
         .should('have.value','Acerto')

         cy.get('[data-cy=dataSobrenome]').type('Test12345{backspace}{backspace}') 
         .should('have.value', 'Test123')        
    })

    it('Radio button', ()=>{
        cy.get('#formSexoFem').click().should('be.checked')
        // cy.get('#formSexoFem').should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

    })

    it('Checkbox', ()=>{
        cy.get('#formComidaFrango').click().should('be.checked')
        cy.get('[name="formComidaFavorita"]').click({multiple: true}).should('be.checked')
    })

    it('Combo', ()=>{
        cy.get('[data-test=dataEscolaridade]').select('2grauincomp')
        .should('have.value','2grauincomp')
        //..........................................................//
        //Checar se o combo contem todas as opcoes desejadas

        cy.get('[data-test=dataEscolaridade] option').then($arr => {
           //criar um array para salvar as opcoes
            const value = []
            //fazer com que cada posicao do array receba o nome das opcoes
            $arr.each(function() {
                value.push(this.innerHTML)
            })

            expect(value).to.include.members(['Superior', 'Mestrado'])

        })

    })

    it.only('Combo mult',()=>{
        
        cy.get('[data-testid=dataEsportes]').select(['natacao','futebol'])
        .debug()
        cy.get('[data-testid=dataEsportes]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao','futebol'])
        })

    

    })

})



