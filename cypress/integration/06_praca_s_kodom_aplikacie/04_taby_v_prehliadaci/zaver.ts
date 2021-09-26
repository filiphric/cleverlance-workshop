
describe('taby v prehliadači', { baseUrl: ""}, () => {


  beforeEach( () => {
  
    cy.visit('cypress/integration/06_praca_s_kodom_aplikacie/04_taby_v_prehliadaci/pages/tabs.html')
  
  })
  
  it('otvorenie linku v novom tabe', { baseUrl: ""}, () => {
  
    cy.get('a').eq(0).invoke('removeAttr', 'target').click()
    
  })
  
  it('overenie linku', () => {
  
    cy.get('a').eq(0).invoke('attr', 'href').then( link => {
      cy.request(link)
    })
  
  
  })
  
  it.only('overenie zavolania linku', () => {
  
    cy
      .window().then((win) => {
        cy.spy(win, 'open').as('redirect');
      });
    
    cy.get('a').eq(1).click();
    
    cy
      .get('@redirect')
      .should('be.calledWith', 'https://google.com', '_blank',);
    
    })
  
  })