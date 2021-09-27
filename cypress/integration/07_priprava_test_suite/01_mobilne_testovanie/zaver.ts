
const page = 'cypress/integration/07_priprava_test_suite/01_mobilne_testovanie/pages/device.html'

describe('mobilné testovanie', { baseUrl: ""}, () => {

  it('mobilné rozlíšenie', () => {

    cy.viewport('iphone-5')

    cy.visit(page)
    
  })

  it('dotykové zariadenie', () => {

    cy.visit(page, {
      onBeforeLoad: (win) => {
        win.ontouchstart = true
      }
    })
    
  })
  
  it.only('mobilné zariadenie', () => {
    
    cy.visit(page, {
      onBeforeLoad: (win) => {
        Object.defineProperty(win.navigator, 'userAgent', {
          value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        }); 
      }
    })

  })

})