describe('mobilné testovanie', { baseUrl: ""}, () => {

  const page = 'cypress/integration/07_priprava_test_suite/01_mobilne_testovanie/pages/device.html'

  it.only('mobilné rozlíšenie', () => {

    cy.visit(page)
    
  })

  it('dotykové zariadenie', () => {

    cy.visit(page)
    
  })
  
  it('mobilné zariadenie', () => {
    
    cy.visit(page)

  })

})