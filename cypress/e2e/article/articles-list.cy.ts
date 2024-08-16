describe('The user is visiting a page with a list of articles', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('And the articles are uploaded successfully (with fixture)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Example of a skipped test', () => {
        cy.get('asfasf').should('exist');
    });
});
