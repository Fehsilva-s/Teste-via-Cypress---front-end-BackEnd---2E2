///<reference types="cypress"/>
import * as faker from 'faker';


describe('Teste BackEnd Wcaquino',() =>{
  let token

  before(()=>{
    cy.getToken('ssfelipe2@gmail.com','123456')
      .then(tkn=>{
        token = tkn
      })
  })

  beforeEach(()=>{
    cy.getReset()
  })


    it('Deve inserir uma conta',()=>{
        cy.request({
            url:'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: {Authorization: `JWT ${token}` },
            body: {
             nome:'Conta via rest',
            }
          }).as('response')
      
        cy.get('@response').then(res=>{
          expect(res.status).to.be.equal(201)
          expect(res.body).to.have.property('nome','Conta via rest')
        })
    })

    it('Deve alterar uma conta', () => {

      cy.request({
        url: 'https://barrigarest.wcaquino.me/contas',
        method: 'GET',
        headers: {Authorization: `JWT ${token}` },
        qs: {
          nome: 'Conta para alterar'
        }
      }).then(res => {
            cy.request({
              url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
              method: 'PUT',
              headers: {Authorization: `JWT ${token}` },
              body: {
                nome:'Conta para alterar1'
              }
            }).as('response')

        })

      cy.get('@response').its('status').should('be.equal',200)
    })

      
    

    it('Deve inserir uma conta com o mesmo nome',()=>{
      cy.request({
        url:'https://barrigarest.wcaquino.me/contas',
        method: 'POST',
        headers: {Authorization: `JWT ${token}` },
        body: {
         nome:'Conta para alterar',
        },
        failOnStatusCode:false
      }).as('response')
  
      cy.get('@response').then(res=>{
  
        expect(res.status).to.be.equal(400)
        expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
      })        
    })
})
