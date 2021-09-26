/// <reference types="cypress" />

// úloha #1: vytvor si nového používateľa pomocou /signup requestu a následne 
// použi odpoveď z requestu na jeho prihlásenie do aplikácie
// na konci testu si aplikáciu otvor

beforeEach( () => {

  cy.request('POST', '/api/reset')

})

it('prihlásenie novovytvoreného používateľa do aplikácie', () => {

})