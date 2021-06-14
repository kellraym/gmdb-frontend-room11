describe("Home page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it("Shows a movie poster", () => {
      cy.findAllByRole('img').should('exist')
        //cy.get('p')
        // .findByText('There are no recipes to list.')
        //.should('exist')
    })
  })