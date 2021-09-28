describe('vynechanie testu podľa prehliadača', () => {

  it('test pustený na chrome', { browser: 'chrome' }, () => {

    cy
      .visit('/')

  });

  it('test pustený na firefoxe', { browser: 'firefox' }, () => {

    cy
      .visit('/')

  });

  it('test preskočený na mobile', { viewportWidth: 300 }, () => {
    
    cy.skipOn(Cypress.config('viewportWidth') < 350);

  });

});

describe.only('test grepping', () => {

  it('test #1: @smoke', { tags: ['@smoke']}, () => {
    
  })

  it('test #2: @user', { tags: ['@user']}, () => {
    
  })

  it('test #3: @user & @smoke', { tags: ['@smoke', '@user']}, () => {
    
  })

})