///<reference types="cypress"/>


describe('Work with alerts',() =>{
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Using jquery selector',()=>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) >input').click()
        cy.get("[onclick*='Francisco']")
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input').type('Ola Felipe') 
    })

    it('Using xpath',()=>{
        cy.xpath('//input[contains(@oncick,\'Francisco\')]')
    })
})