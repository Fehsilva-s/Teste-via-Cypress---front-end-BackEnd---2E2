///<reference types="cypress"/>

describe('Work with basic element',() =>{
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('links', ()=>{
        cy.get('[href="#"]').click()
        cy.get('body').should('contain', 'Cuidado')
    })
    
    it('Text', ()=>{
    //cy.get('[href="#"]').click()
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })

    it('TextFilds', ()=>{
        cy.get('#formNome').type('Cypress Test')
        .should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
    
        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')
    
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto')
            .should('have.value', 'acerto')
    
    })

    it('RadioButton', () =>{
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexo > tbody > tr > :nth-child(1) > label')
            .should('not.be.checked')
    })
    
    it('CkeckRadioButton', ()=>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
        cy.get('#formComidaPizza')
            .should('not.be.checked')
    })

    it('ComboBox', ()=> {
        cy.get('[data-test="dataEscolaridade"]')
            .select ('Superior')
            .should('have.value','superior')
        //TODO Validar as opções do combo
    })

    it('Combo Multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida', 'nada'])


    })
})