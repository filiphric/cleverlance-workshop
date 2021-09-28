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
    .visit('/board/27280994580?card=63682250914')

    cy
    .get('[data-cy="copy-properties"]')
    .click()

});