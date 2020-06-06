import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { Login, Landing } from '../../fixtures/page-objects';

const loginPage = Login.getInstance();
const landingPage = Landing.getInstance();

Given('I open the homepage', () => {
	return loginPage.visit();
});

When('I click the login button in the menu', () => {
	loginPage.loginButton.click();
});

And('I enter my sign in with email credentials', () => {
	loginPage.emailInput.type(Cypress.env('username'));
	loginPage.passwordInput.type(Cypress.env('password'));
});

And('I click the sign in button', () => {
	loginPage.signInWithEmailButton.click();
});

Then('I see the landing page', () => {
	landingPage.tasksButton.should('be.visible');
});
