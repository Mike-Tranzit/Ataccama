describe("Wrapper", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('should have rows more than 0', function () {
        cy.lengthOfElementsShouldBeGreater(".data-table tbody tr", 0);
    });

    it('tr after click should have data-table__td--open class', function () {
        const selector =  cy.get('.data-table tbody > :nth-child(3)');
        selector.click();
        selector.find(".data-table__td--empty").should('have.class', 'data-table__td--open');
    });

    it('should have button', function () {
        cy.elementOnlyOne('.data-table tbody > :nth-child(3) > .data-table__td--empty button');
    });

    it('should have internal table', function () {
        const selector =  cy.get('.data-table tbody > :nth-child(3)');
        selector.click();
        cy.get('.data-table__td-kit').should('be.visible');
    });

    it('tr before click should have data-table__td--close class', function () {
        const selector =  cy.get('.data-table tbody > :nth-child(3)');
        selector.find(".data-table__td--empty").should('have.class', 'data-table__td--close');
    });
});
