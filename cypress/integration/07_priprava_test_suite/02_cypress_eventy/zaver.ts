describe('app events', {baseUrl: ""}, () => {

  const page = 'cypress/integration/07_priprava_test_suite/02_cypress_eventy/pages/index.html'

  beforeEach( () => {

    cy.visit(page)

  })

  it('alert', () => {

    cy.get('#alert').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Hello there!');
    });

  })

  it('redirect', () => {

  const urlRedirects = [];

  cy
    .on('url:changed', (url) => {
      urlRedirects.push(url);
    });

  cy
    .get('a')
    .click()

  cy
    .then(() => {

      expect(urlRedirects).to.have.length(2);
      expect(urlRedirects[0]).to.contain('/page2');
      expect(urlRedirects[1]).to.contain('/page3');

    });
    
  })

})

describe('cypress events', () => {

  it('fail #1', () => {

    Cypress.on('fail', (err) => {
      err.message += '\n\n🙀';

      if (Cypress.browser.isHeadless) {
        return
      } else {
        throw err
      }

    });

    expect(true).to.be.false

  })

  it('fail #2', () => {

    expect(true).to.be.false

  })

})