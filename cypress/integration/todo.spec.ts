/// <reference types="cypress" />
describe('Todo App', () => {
  it('completes an item', () => {
    // base url is stored in "cypress.json" file
    cy.visit('/')
    // there are several existing todos
    cy.get('.todo').should('have.length', 3)

    cy.log('**adding a todo**')
    cy.get('.input').type('write tests{enter}')
    cy.get('.todo').should('have.length', 4)

    cy.log('**completing a todo**')
    cy.contains('.todo', 'write tests').contains('button', 'Complete').click()
    cy.contains('.todo', 'write tests')
      .should('have.css', 'text-decoration', 'line-through solid rgb(74, 74, 74)')

    cy.log('**removing a todo**')
    // due to quarantine, we have to delete an item
    // without completing it
    cy.contains('.todo', 'Meet friend for lunch').contains('button', 'x').click()
    cy.contains('.todo', 'Meet friend for lunch').should('not.exist')
  })
})
