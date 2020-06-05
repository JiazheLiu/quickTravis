describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('if the ChoreYear in hearder', () => {
        cy.visit ('/');
        cy.get('[data-cy=ChoreYear]').should('contain', 'ChoreYear');
      });

    it('if the add group have a save button', () => {
    cy.visit ('/groups');
    cy.get('[data-cy=addgroup]').click();
    cy.get('[data-cy=save]').should('contain' ,'Save');
    });
  });