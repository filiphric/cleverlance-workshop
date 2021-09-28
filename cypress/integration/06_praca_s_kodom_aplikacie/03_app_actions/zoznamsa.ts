// úloha #1: skús si pomocou app action otvoriť api nástroje
it('otvorenie api nástrojov', () => {

  cy
    .visit('/')

});

// úloha #2: zavolaj si funkciu showNotification s vlastnou správou
it('zobrazenie notifikácie', () => {

  cy
    .visit('/')

})

// úloha #3: naplň store tak, aby sa Ti v zozname zobrazil zoznam boardov
it('zoznam boardov', () => {

  cy.visit('/')

  cy.window().invoke('store').then( store => {
    store.boardList.all = []
  })
})

