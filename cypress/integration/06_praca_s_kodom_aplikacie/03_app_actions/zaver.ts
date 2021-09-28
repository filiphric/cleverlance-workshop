it('page action', () => {

  cy
    .visit('/')

  cy.window().invoke('store').invoke('resetBoards')
  cy.window().invoke('store').invoke('showNotification', 'We are testing')
  cy.window().invoke('store').then( store => {
    store.loading = true 
  })

});