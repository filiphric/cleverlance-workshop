// úloha #1: klikni na confirm button a potvrď dialóg
it('potvrdenie dialógu', () => {
  cy.get('#confirm').click();
  
  

  cy.get('#result').contains('Your answer: OK');

});
  
// úloha #1: klikni na confirm button a zruš dialóg
it('cancel dialógu', () => {
  cy.get('#confirm').click();



  cy.get('#result').contains('Your answer: Cancel');
});