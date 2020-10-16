describe("Wrapper", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('should have container', function () {
        cy.get('.data-table').should('be.visible');
        cy.get('.container').should('be.visible');
    });
});
