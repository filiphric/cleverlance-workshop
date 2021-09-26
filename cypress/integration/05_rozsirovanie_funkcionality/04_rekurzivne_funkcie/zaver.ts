Cypress.Commands.add('boardPolling', ({
  retries = 0,
  limit = 10,
  boardCount
}) => {
  cy
    .request({
      method: 'GET',
      url: '/api/boards',
      headers: {
        accept: 'application/json'
      }
    })
    .then(({ body }) => {

      // out of retries
      if (retries === limit) {
        retries = 0;
        throw new Error(`There were not ${boardCount} boards after ${retries} retries `);
      }

      // Enough boards
      if (body.length === boardCount) {
        return;
      }

      // Try again if not
      cy.wait(500, { log: false }).then(() => {
        retries++;
        cy.boardPolling({ retries, limit, boardCount });
      });
    })
})

it('should have 3 boards', () => {

  cy.visit('/')
  cy.boardPolling({boardCount: 3})

})