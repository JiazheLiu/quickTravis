describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
    it ('if the ChoreYear in hearder', () => {
        cy.visit ('/');
        cy.get('[data-cy=ChoreYear]').should('contain', 'ChoreYear');
      });
  });