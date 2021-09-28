it('zobrazenie hviezdičky', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy="board-item"]')
    .should('have.css', 'background-color', 'rgb(2, 106, 167)')

  cy
    .get('[data-cy="board-item"]')
    .realHover()
    .get('[data-cy="star"]')
    .should('be.visible')

  cy
    .get('[data-cy="board-item"]')
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')

});

it.only('skopírovanie atribútov karty', () => {

  cy
    .visit('/board/27280994580?card=63682250914')

    cy
    .get('[data-cy="copy-properties"]')
    .realClick()
    .task('getClipboard')
    .should('deep.eq', '{\n  "order": 0,\n  "boardId": 27280994580,\n  "listId": 68997132944,\n  "name": "card 1",\n  "id": 63682250914,\n  "created": "2021-09-28",\n  "deadline": "2021-10-01",\n  "description": "",\n  "completed": false\n}')

});