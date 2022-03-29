/// <reference types ="cypress"/>

import homeFactory from "../factories/homeFactory";
import Home from "../pages/Home";

describe('Home', () => {
    it('app deve estar online', () => {
        Home.go()
    });
    
})

describe('Cadastrar Entradas e Saidas', () => {

    beforeEach(() => { 
        Home.go()
    });
    it('Cadastrar entradas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 3);
        Home.logo()
    });

    it('Cadastrar Saídas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormNeg(finance) 
        cy.get('#data-table tbody tr').should('have.length', 3);
        Home.logo()
    });

    it('Cadastrar Entradas e Saídas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormNeg(finance) 
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 4);
        Home.logo()
    });
})

describe('Remover Entradas e Saidas', () => {

    beforeEach(() => { 
        Home.go()
    });

    it('Remover Entradas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 3);
        Home.deliteItem(finance);
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.logo()
    });

    it('Remover Saídas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormNeg(finance) 
        cy.get('#data-table tbody tr').should('have.length', 3);
        Home.deliteItem(finance);
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.logo()
    });

    it('Remover Entradas e Saídas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormNeg(finance) 
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 4);
        Home.deliteItem(finance)
        cy.get('#data-table tbody tr').should('have.length', 3);
        Home.logo()
        Home.deliteItem(finance)
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.logo()
    });
});


describe('Validar saldo com diversas transações', () => {

    beforeEach(() => { 
        Home.go()
    });

    it('Validar Saldo', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 3);
        Home.fillFormPos2(finance)
        cy.get('#data-table tbody tr').should('have.length', 4);
        Home.fillFormNeg(finance);
        cy.get('#data-table tbody tr').should('have.length', 5);
        Home.logo();

        Home.verificarTotal();
    });
});