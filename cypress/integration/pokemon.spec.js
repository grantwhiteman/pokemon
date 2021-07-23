describe("pokemon", () => {
    it("gets API response and displays a picture and name of pokemon", () => {
        // cy.intercept('https://api.github.com/users/dearshrewdwit', { fixture: 'mock.json' })
        cy.visit('/')
        cy.get('#input').type('Picachu')
        cy.get('#button').click()
        cy.get('#name').should('contain', 'Pikachu')
        cy.get('[alt="Pokemon-img"]').should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })
})