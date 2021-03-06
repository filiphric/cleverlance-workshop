beforeEach(() => {

  cy
    .request('POST', '/api/reset')

});

it('vytvorenie boardu, zoznamu a karty #1', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('nový board{enter}');

  cy
    .url()
    .should('contain', '/board/')

  cy
    .get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

  cy
    .get('[data-cy=list]')
    .should('be.visible')

  cy
    .get('[data-cy=new-card]')
    .click()

  cy
    .get('[data-cy=new-card-input]')
    .type('kúpiť mlieko{enter}')

  cy
    .get('[data-cy=card]')
    .should('have.length', 1)

})

it('vytvorenie boardu, zoznamu a tasku #2', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('nový board{enter}');

  cy
    .url()
    .should('contain', '/board/')

  cy
    .get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

  cy
    .get('[data-cy=list]')
    .should('be.visible')

  cy
    .get('[data-cy=new-card]')
    .click()

  cy
    .get('[data-cy=new-card-input]')
    .type('kúpiť mlieko{enter}')

  cy
    .get('[data-cy=card]')
    .should('have.length', 2)

})