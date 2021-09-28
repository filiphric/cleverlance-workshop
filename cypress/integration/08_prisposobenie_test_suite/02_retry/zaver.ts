describe('nestabilný test', () => {

  beforeEach(() => {

    cy
      .request('POST', '/api/reset');

  })

  it('ID boardu musí byť párne', { retries: 10 },  () => {

    cy
      .intercept('POST', '/api/boards')
      .as('board')

    cy
      .visit('/')

    cy
      .get('[data-cy="create-board"]')
      .click();

    cy
      .get('[data-cy=new-board-input]')
      .type('new board{enter}');

    cy
      .wait('@board')
      .then(({ response }) => {

        expect(response.body.id % 2 == 0).to.be.true

      })

  });

});