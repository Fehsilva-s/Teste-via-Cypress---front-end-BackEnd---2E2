///<reference types="cypress"/>
import * as faker from 'faker';
const el= require('..//support/supBarriga').ELEMENTO


describe('Teste E2E Wcaquino',() =>{
    beforeEach(()=>{
       cy.visit('https://barrigareact.wcaquino.me')
    })


    it('Deve inserir uma conta',()=>{
        cy.get(el.login).type(el.usuario)
        cy.get(el.senha).type(el.passaword)
        cy.get(el.entrar).click()
        cy.get(el.mensagem).should('contain', 'Bem vindo, Felipe!')

     //inserindo uma nova conta
        cy.get(el.settings).click()
        cy.get(el.contas).click() 
        cy.get(el.describConta).type(faker.internet.userName());
        cy.get(el.saveConta).click()
        cy.get(el.mensagem).should('contain','Conta inserida com sucesso!')

     //Alterar conta
        cy.get(el.alterarConta).click()
        cy.get(el.describConta)
            .clear()
            .type(faker.address.state())
        cy.get(el.saveConta).click()
    })

    it('Deve inserir uma conta repetida', () => {
        cy.get(el.login).type(el.usuario)
        cy.get(el.senha).type(el.passaword)
        cy.get(el.entrar).click()
        cy.get(el.settings).click()
        cy.get(el.contas).type('Conta mesmo nome') 
        cy.get(el.saveConta).click()
        cy.get(el.mensagem).should('contain','status code 400')
      
        // Obter texto da primeira célula da primeira linha da tabela
        //cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text')
        //  .then((texto, ) => {
        //   cy.get(el.contas).type(texto)
        //    cy.get(el.saveConta).click()
        //  })
      })

      it('Deve inserir uma movimentaça',()=>{
        cy.get(el.login).type(el.usuario)
        cy.get(el.senha).type(el.passaword)
        cy.get(el.entrar).click()
        cy.get(el.movimentMenu).click()
        cy.get(el.movimentDescricao).type(faker.name.findName())
        cy.get(el.movimentValor).type(faker.random.number())
        cy.get(el.movimentInteressado).type('teste')
        cy.get(el.movimentSave).click()
        cy.get(el.mensagem).should('contain','Movimentação inserida com sucesso')
      })
})
