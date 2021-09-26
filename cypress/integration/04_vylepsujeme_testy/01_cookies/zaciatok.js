/// <reference types="cypress" />

it('nastavenie cookies', { baseUrl: "" }, () => {

  cy
    .setCookie('cookie', 'chocolate')

  cy
    .visit('./cypress/integration/04_vylepsujeme_testy/01_cookies/pages/cookies.html');

});

it('otestovanie cookies', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/04_vylepsujeme_testy/01_cookies/pages/cookies.html');

  cy
    .getCookie('cookie')
    .its('value')
    .should('eq', 'chocolate')

})