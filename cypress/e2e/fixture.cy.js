///<reference types="cypress"/>

describe('Fixture tests',() =>{
    it('Get data form fixture file', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.fixture('userData').as('usuario').then(() =>{
        cy.get('#formNome').type(this.usuario.nome)
        cy.get('[data-cy="dataSobrenome"]').type(this.usuario.sobrenome)
        cy.get('[name=formSexo][value=M]').click()
        cy.get('[name=formComidaFavorita][value=frango]').click()
        cy.get('tr td select [value=futebol]').click()
        //cy.get('tr td #elementosForm\:\sugestoes')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

    })
        

    })
})


    

    