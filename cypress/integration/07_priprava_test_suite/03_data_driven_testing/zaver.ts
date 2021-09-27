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

  lists.forEach((list, index) => {

    it(`check list ${list.name}`, () => {

        cy
          .get('[data-cy=list-name]')
          .eq(index)
          .should('have.value', list.name)

      })

    })

})
