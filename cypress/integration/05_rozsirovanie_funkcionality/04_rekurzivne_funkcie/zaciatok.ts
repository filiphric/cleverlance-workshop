import { expectation } from "cypress/types/sinon";

it('should have 3 boards', () => {

  cy.visit('/')

  cy
    .request({
      method: 'GET',
      url: '/api/boards',
      headers: {
        accept: 'application/json'
      }
    })
    .then(({ body }) => {

      expect(body).to.have.length(3)

    })

})