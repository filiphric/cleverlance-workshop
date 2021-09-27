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

    cy.visit('/board/58316075298')

  })

  it(`check list ${lists[0].name}`, () => {

    cy
      .get('[data-cy=list-name]')
      .eq(0)
      .should('have.value', lists[0].name)

  })

})