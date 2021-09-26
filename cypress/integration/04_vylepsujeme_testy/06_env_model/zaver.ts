Cypress.Commands.add('visitBoard', (b = 0) => {
  cy.visit(`/board/${Cypress.env('boards')[b].id}`)
})

Cypress.Commands.add('createBoard', () => {

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board'
      }
    }).then( ({ body }) => {
      Cypress.env('boards').push(body)
    })
  
})


beforeEach( () => {

  cy.request('POST', '/api/reset')

  Cypress.env('boards', [])
  
})

it('otvorenie vytvoreného boardu', () => {

  cy.createBoard()
  cy.createBoard()

  cy.visitBoard(1)

});