/// <reference types ="cypress"/>


describe('Esperas...',() =>{   
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    it('Deve aguardar o elemento estar disponivel',() =>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('cypress test')
    })

    it('Deve fazer retrys',() =>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('cypress test')
    })

    it('Cuidado com oque busta',()=>{
        cy.get('#buttonList').click()
        cy.get('body #lista li span')
            .should('contain','Item 1')
        cy.get('body #lista li span')
            .should('contain','Item 2')     
    })

    it.only('Uso do timeout', ()=>{
       // cy.get('#buttonDelay').click()
        //cy.get('#novoCampo').should('exist')
        cy.get('#buttonListDOM').click()
        cy.wait(5000)
        cy.get('body #lista li span')
            .should('contain','Item 2')  
    })

})