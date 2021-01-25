describe('Fetch Movie on Button Click', () => {

  it('Fetch Movie. e2e', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://www.omdbapi.com/',
    }).as('fetchMovies')

    cy.visit('http://localhost:3000/');

    cy.get('.btn-fetch').click();

    cy.wait('@fetchMovies').then(() => {
      cy.get('.movie-title').should('have.text', 'Ad Astra');
    });
  })

  it('Fetch Movie. Integration', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://www.omdbapi.com/',
    }, {
      statusCode: 200,
      body: { Title: 'My Title', Plot: 'Sample Plot', Actors: 'Jack Doe', Year: 1000 }
    }).as('fetchMovies');

    cy.visit('http://localhost:3000/');

    cy.get('.btn-fetch').click();

    cy.wait('@fetchMovies').then(() => {
      cy.get('.movie-title').should('have.text', 'My Title');
    });
  })

})