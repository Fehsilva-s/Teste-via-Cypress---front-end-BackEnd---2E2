///<reference types="cypress"/>

describe('Work with alerts',() =>{
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('DEve preencher o campo de texte',()=>{
        cy.get('#frame1')
    })

})
