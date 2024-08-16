import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User is not authorized', () => {
        it('Navigate to the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigate to the about page', () => {
            cy.visit('/about');
            cy.get(selectByTestId('AboutPage')).should('exist');
        });
        it('Navigate to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigate to a non-existent page', () => {
            cy.visit('/sdfkhsdfhsjdf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Navigate to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Navigate to the article page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
