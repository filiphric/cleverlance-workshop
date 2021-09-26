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

it('skopírovanie atribútov karty', () => {

  cy
    .visit('/board/69269761612?card=17346606170')

    cy
    .get('[data-cy="copy-properties"]')
    .realClick()
    .task('getClipboard')
    .should('deep.eq', '{\n  "order": 0,\n  "boardId": 69269761612,\n  "listId": 66318697844,\n  "name": "aaa",\n  "id": 17346606170,\n  "created": "2021-09-26",\n  "deadline": "2021-09-29",\n  "description": "",\n  "completed": false\n}')

});