describe.only('vynechanie testu podľa prehliadača', () => {

  it('test pustený na chrome', () => {

    cy
      .visit('/')

  });

  it('test pustený na firefoxe', () => {

    cy
      .visit('/')

  });

  it('test preskočený na mobile', () => {
    
    cy.skipOn(Cypress.config('viewportWidth') < 350);

  });

});

describe('test grepping', () => {

  it('test #1: @smoke', { tags: ['@smoke']}, () => {
    
  })

  it('test #2: @user', { tags: ['@user']}, () => {
    
  })

  it('test #3: @user & @smoke', { tags: ['@smoke', '@user']}, () => {
    
  })

})