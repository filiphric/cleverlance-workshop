it('vytvorenie nového boardu', () => {

  cy
    .visit('/');

  cy
    .addBoard('new board')

});

/*

Cypress.Commands.add('addBoard', (name: string) => {

  let boardUrl;

  const log = Cypress.log({
    autoEnd: false,
    consoleProps() {
      return {
        'board name': name,
        'board url': boardUrl
      }
    },
    displayName: 'addBoard',
    message: name,
    name: 'Add new board'
  });

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy="new-board-input"]')
    .type(name)
    .type('{enter}');

  cy
    .url()
    .then((url) => {
      boardUrl = url
      log.end()
    })

});


*/