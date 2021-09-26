it.only('zobrazenie hviezdičky', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')
    .get('[data-cy="star"]')
    .should('be.visible')

});

it('skopírovanie atribútov karty', () => {

  cy
    .visit('/board/69269761612?card=17346606170')

    cy
    .get('[data-cy="copy-properties"]')
    .click()

});