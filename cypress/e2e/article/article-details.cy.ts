let currentArticleId = '';
describe('The user is visiting the article page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('And sees the contents of the article', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('And sees a list of recommendations', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('And leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentItem.Content').should('have.length', 1);
    });
    it('And makes a grade', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('Rating').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
