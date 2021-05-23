/// <reference types="cypress" />

context('Amazon tests', () => {

  // Search for a pen
  it('Search for a pen', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox')
    .type('pen')
    cy.get('#nav-search-submit-button').click()
    cy.url().should('eq', 'https://www.amazon.com/s?k=pen&ref=nb_sb_noss')
  })

  // Add the first pen to the cart
  it('Add the first pen to the cart', () => {
    cy.visit('https://www.amazon.com/s?k=pen&ref=nb_sb_noss')

    // Click on first element to go to its page
    cy.get('span[data-component-id="1"] div')
      .click()
      .should('not.eq', 'https://www.amazon.com/s?k=pen&ref=nb_sb_noss')

    // No element is added
    cy.get('#nav-cart-count')
      .should('contain', '0')

    // Add element to cart
    cy.get('#add-to-cart-button')
      .click()

    // Check that the element is added
    cy.get('#nav-cart-count')
      .should('contain', '1')
  })
})
