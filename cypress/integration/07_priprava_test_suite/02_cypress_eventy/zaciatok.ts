describe('app events', {baseUrl: ""}, () => {

  const page = 'cypress/integration/07_priprava_test_suite/02_cypress_eventy/pages/index.html'

  beforeEach( () => {

    cy.visit(page)

  })

  it.only('alert', () => {

    cy.get('#alert').click();
    
  })

  it('redirect', () => {

    cy
      .get('a')
      .click()
        
    })

})

describe('cypress events', () => {

  it('fail #1', () => {

    expect(true).to.be.false

  })


  it('fail #2', () => {

    expect(true).to.be.false

  })

})