export const updateProfile = (
    firstname: string,
    lastname: string,
    age: string,
) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('ProfileCard.age').clear().type(age);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdaga' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 23,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname: string,
                lastname: string,
                age: string,
            ): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
