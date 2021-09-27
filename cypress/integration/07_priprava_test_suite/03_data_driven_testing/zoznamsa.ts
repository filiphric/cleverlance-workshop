describe('data driven tesing', () => {

  const lists = [
    {
      name: 'to do',
      cards: ['odpáliť raketu', 'pobaliť jedlo', 'tlačová správa']
    },
    {
      name: 'in progress',
      cards: ['pripraviť astronautov', 'nastaviť odpočítavanie']
    },
    {
      name: 'completed',
      cards: ['natankovať raketu']
    }
  ]

  before( () => {

    cy.request('DELETE', '/api/cards')
    cy.visit('/board/58316075298')

  })

  lists.forEach((list, index) => {

    it(`check list ${list.name}`, () => {

      cy
        .get('[data-cy=list-name]')
        .eq(index)
        .should('have.value', list.name)

      cy
        .get('[data-cy=list]')
        .eq(index)
        .find('[data-cy=new-card]')
        .click()

        // úloha #1: pridaj do testu ďalší forEach loop, ktorý vytvorí 
        // v každom zozname karty z poľa "cards"
      
    })

  })

})
