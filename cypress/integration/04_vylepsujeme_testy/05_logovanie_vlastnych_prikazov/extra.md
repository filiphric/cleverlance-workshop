## Užitočné čítanie
- [môj blog na tému custom commandov a logovania](https://filiphric.com/improve-your-custom-command-logs-in-cypress)
- [webinár o Cypress best practices, kde sa spomýna custom logovanie](https://www.youtube.com/watch?v=V-o8WzlwKmM)

```ts
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
```