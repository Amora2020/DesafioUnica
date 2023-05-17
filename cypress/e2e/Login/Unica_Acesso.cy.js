/// <reference types="Cypress"/>


describe('acesso comercio online', () => {
    it('acesso com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get ('[data-test="username"]').type ("standard_user")
        cy.get ('[data-test="password"]').type ("secret_sauce")
        cy.get ('[data-test="login-button"]').click()
        cy.get ('.title').should ('contain','Products')
        cy.get('#item_4_title_link > .inventory_item_name').first().click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
    });
});
