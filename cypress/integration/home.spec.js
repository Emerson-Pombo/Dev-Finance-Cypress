/// <reference types ="cypress"/>

import homeFactory from "../factories/homeFactory";
import Home from "../pages/Home";

describe('Home', () => {
    it('app deve estar online', () => {
        Home.go()
    });
    
})

describe('Cadastros', () => {

    beforeEach(() => { 
        Home.go()
    });
    it('Cadastrar entradas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 0);
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 1);
        Home.logo()
    });

    it('Cadastrar Saídas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 0);
        Home.fillFormNeg(finance) 
        cy.get('#data-table tbody tr').should('have.length', 1);
        Home.logo()
    });

    it('Cadastrar Entradas e Saídas', () => {
        var finance = homeFactory.finance()
        cy.get('#data-table tbody tr').should('have.length', 0);
        Home.fillFormNeg(finance) 
        Home.fillFormPos(finance)
        cy.get('#data-table tbody tr').should('have.length', 2);
        Home.logo()
    });
})



