
const page = 'cypress/integration/07_priprava_test_suite/01_mobilne_testovanie/pages/device.html'

describe('mobilné testovanie', { baseUrl: ""}, () => {

  it('mobilné rozlíšenie', () => {

    cy.visit(page)
    
  })

  it('dotykové zariadenie', () => {

    cy.visit(page)
    
  })
  
  it('mobilné zariadenie', () => {
    
    cy.visit(page)

  })

})