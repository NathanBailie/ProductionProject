let profileId = '';

describe('User is visiting the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('And the profile uploads successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'user');
    });
    it('And he edits it', () => {
        const newName = 'new name';
        const newLastname = 'new lastname';
        const newAge = '25';
        cy.updateProfile(newName, newLastname, newAge);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastname,
        );
        cy.getByTestId('ProfileCard.age').should('have.value', newAge);
    });
});
