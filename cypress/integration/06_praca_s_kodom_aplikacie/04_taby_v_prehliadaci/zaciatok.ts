
describe('taby v prehliadači', { baseUrl: ""}, () => {

  beforeEach( () => {

    cy.visit('cypress/integration/06_praca_s_kodom_aplikacie/04_taby_v_prehliadaci/pages/tabs.html')

  })

  it.only('otvorenie linku v novom tabe', { baseUrl: ""}, () => {

    cy.get('a').eq(0)
    
  })

  it('overenie linku', () => {

    cy.get('a').eq(0)

  })

  it('overenie zavolania linku', () => {

    cy.get('a').eq(1).click();

  })

})