describe('Home Page', () => {
  it('should visit the home page', () => {
    cy.visit('/')
    cy.contains('Welcome to')
  })
})
