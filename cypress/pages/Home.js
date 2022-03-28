/// <reference types ="cypress"/>

class Home {

    go() {
        cy.visit('/');
    }
    logo() {
        cy.get('header img').should('be.visible');
    }
    fillFormPos(finance) {
        cy.get('section#transaction a.button.new').click();
        cy.get('[name=description]').type(finance.descricao);
        cy.get('[name=amount]').type(finance.valor);
        cy.get('[name=date]').type(finance.data);
        cy.get('button').contains('Salvar').click();
        cy.get('#data-table tbody tr td.description').should('be.visible');
        cy.get('#data-table tbody tr td.income').should('be.visible');
        cy.get('#data-table tbody tr td.date').should('be.visible');
        

    }
    fillFormNeg(finance) {
        cy.get('section#transaction a.button.new').click();
        cy.get('[name=description]').type(finance.descricao);
        cy.get('[name=amount]').type(finance.valorNeg);
        cy.get('[name=date]').type(finance.data);
        cy.get('button').contains('Salvar').click();
        cy.get('#data-table tbody tr td.description').should('be.visible');
        cy.get('#data-table tbody tr td.expense').should('be.visible');
        cy.get('#data-table tbody tr td.date').should('be.visible');


    }
    
}
export default new Home;