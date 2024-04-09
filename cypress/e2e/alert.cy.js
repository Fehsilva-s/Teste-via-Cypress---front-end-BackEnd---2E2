///<reference types="cypress"/>

describe('Work with alerts',() =>{
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    //Primeira forma para trabalhar com Alert
    it('links', ()=>{
        cy.get('#alert').click()
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    //segunda forma para trabalhar com Alert
    it('Alert com Mock', ()=>{
        const stub = cy.stub().as('alerta')
        cy.on('window:alert',stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    //Primeira forma para trabalhar com Alert
    it('Confirm', ()=>{
        cy.get('#confirm').click()
        cy.on('window:confim', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('confirm Simples')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })

    it('Deny', ()=>{
        
        cy.on('window:confim', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })
// Cenario para clicar no prompt, inserir dados e fazer o asset
    it.only('Prompt', ()=>{
        cy.window().then(win=>{
            cy.stub(win, 'prompt').returns('42')
        })

        //cy.on('window:confirm', msg =>{
        //    expect(msg).to.be.equal('confirm Simples')
      // })
        //cy.on('window:alert', msg =>{
        //    expect(msg).to.be.equal('Confirmado')
       // })
        cy.get('#prompt')
    })


})
