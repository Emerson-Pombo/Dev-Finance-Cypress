/// <reference types ="cypress"/>
import {format, prepareLocalStorange} from '../support/utils';

class Home {

    go() {
        cy.visit('/', {
            onBeforeLoad: (win) => {
                prepareLocalStorange(win)
            }
        });
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
    fillFormPos2(finance) {
        cy.get('section#transaction a.button.new').click();
        cy.get('[name=description]').type(finance.descricao2);
        cy.get('[name=amount]').type(finance.valor2);
        cy.get('[name=date]').type(finance.data2);
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
    deliteItem(finance){
        //mapear pelo pai
        // cy.contains(finance.descricao)
        // .parent()
        // .find('img[onclick*=remove]').click(); 

        //mapear pelo irmao
        cy.contains(finance.descricao)
        .siblings()
        .children('img[onclick*=remove]').click(); 
    }
    verificarTotal(){
        let incomes = 0;
        let expenses = 0;
        cy.get('table#data-table tbody tr')
        .each(($el, index, $list) =>{
            cy.get($el).find('td.income, td.expense')
                .invoke('text').then(text => {
                    if(text.includes('-')){
                        expenses = expenses + format(text)
                    }else{
                        incomes = incomes + format(text)
                    }
                    let expensesFormat = (expenses).toFixed(2)
                    let incomesFormat = (incomes).toFixed(2)
                    cy.log(expensesFormat);
                    cy.log(incomesFormat);
                })                
        });// each = navegar em cada item de uma lista e executar uma ação
         cy.get('#totalDisplay').invoke('text').then(text => {
            let formattedTotalDisplay = format(text);
            formattedTotalDisplay = formattedTotalDisplay.toFixed(2);
            let expectTotal = (incomes + expenses);
            expectTotal = expectTotal.toFixed(2);

            expect(""+formattedTotalDisplay+"").to.equal(""+expectTotal+"")
        }); 
    }
    
}
export default new Home;