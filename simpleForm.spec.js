///<reference types="cypress"/>
describe('Simple Form Submission', () => {
    it('fills and submits the form', () => {
        // Visit the URL
        cy.visit('https://v1.training-support.net/selenium/simple-form');
        
        // Fill out the form fields
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#email').type('johndoe@example.com');
        cy.get('#number').type('1234567890');
        
        // Submit the form
        cy.get('.ui.green.button').click();

        // Assert that the form was submitted successfully
        cy.contains('Thanks for contacting us, John Doe!').should('be.visible');
    });
});
