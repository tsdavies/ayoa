import { Landing, Login, Tasks } from '../fixtures/page-objects';

const loginPage = Login.getInstance();
const landingPage = Landing.getInstance();
const tasksPage = Tasks.getInstance();

const deleteFirstTask = () => {
	cy.wait(1000);
	tasksPage.taskList.children().first().click();
	tasksPage.taskDetailsMoreTab.click();
	tasksPage.taskDetailsMoreTabDeleteButton.click();
	cy.wait(1000);
	tasksPage.modalConfirmDeleteTaskButton.click();
	cy.wait(1000);
};

context('Signs into the Application and performs some actions', () => {
	it('Logs me in', () => {
		loginPage.visit();
		loginPage.loginButton.click();
		loginPage.emailInput.type(Cypress.env('username'));
		loginPage.passwordInput.type(Cypress.env('password'));
		loginPage.signInWithEmailButton.click();
		//Assert I can see something on the main landing screen
	});

	it('Creates some tasks', () => {
		landingPage.closeOnBoardingButton.click();
		landingPage.tasksButton.click();
		cy.wait(1000);
		tasksPage.addTaskButton.click();
		tasksPage.taskNameInput.type('Automate a task{enter}');
		//Assert list has new task and that task has correct content and that task is not complete
		tasksPage.taskNameInput.type('Add another task{enter}');
		//Assert list has new task and that task has correct content and that task is not complete
		tasksPage.closeTaskButton.click();
	});

	it('Completes a task', () => {
		tasksPage.taskCompletedButton.first().click();
		//Assert task is complete and that styles are updated
	});

	it('Deletes some tasks', () => {
		deleteFirstTask();
		//Assert list is list.length - 1
		deleteFirstTask();
		//Assert list list is empty
	});

	it('Signs me out', () => {
		landingPage.burgerMenuButton.click();
		// landingPage.logoutButton.click(); TODO:triggers a 404, redirect issue?
		landingPage.logout();
	});
});
