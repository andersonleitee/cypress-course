/// <reference types= "cypress" />

describe('work with alert', ()=>{
    before(()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(()=>{
        cy.reload();
    })

    it.only('Alert', ()=>{
        // cy.get('#alert').click()
        // cy.on('window:alert', msg =>{  // cy.on captura eventos na tela. msg será uma string
        //     expect(msg).to.be.equal('Alert Simples') // Assertiva para verificar se a msg realmente esta correta
        // })

        cy.clickAlert('#alert','Alert Simples')
    })

    it('Alert com Mock', ()=>{
        const stub = cy.stub().as('Alerta') //Criar um mock e dar um nome a ele 
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples') /*assertiva para saber se a msg do alert está correta
                                                                       nota-se que se passa um 0 no getCall, isso pq as chamadas estão em um array indexado e como é a primeira chamada é igual a 0 */
        })

    })

    it('Confirm', ()=>{
        cy.on("window:confirm", msg =>{
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{  
            expect(msg).to.be.equal('Confirmado') 
        })
        
        cy.get('#confirm').click()
    })


    it('Deny', ()=>{
        cy.on("window:confirm", msg =>{
            expect(msg).to.be.equal('Confirm Simples')
            return false //Para clicar no cancel
        })
        cy.on('window:alert', msg =>{  
            expect(msg).to.be.equal('Negado') 
        })
        
        cy.get('#confirm').click()
    })

    it('Prompt', ()=>{
        cy.window().then(win =>{
            cy.stub(win,"prompt").returns('42')
        })

        cy.on("window:confirm", msg =>{
            expect(msg).to.be.equal('Era 42?')
            // return false //Para clicar no cancel
        })
        cy.on('window:alert', msg =>{  
            expect(msg).to.be.equal(':D') 
            // expect(msg).to.be.equal(':(') 
        })
        
        cy.get('#prompt').click()

    })

})