import { getByClassName, getById } from '../selectors';

const TASKS_URL = 'https://app.ayoa.com/all-tasks/my-plannerimport';

class Tasks {
	static instance = null;

	static initialised() {
		return Tasks.instance ? true : false;
	}

	static getInstance() {
		if (!Tasks.initialised()) {
			Tasks.instance = new Tasks();
		}
		return Tasks.instance;
	}

	get addTaskButton() {
		return getByClassName('add-task').first();
	}

	get closeTaskButton() {
		return getByClassName('close-add-task');
	}

	get modalConfirmDeleteTaskButton() {
		return cy.get('.confirm');
	}

	get todoTaskEntries() {
		return cy.get('.task-list').first().find('li.pill-task-wrapper');
	}

	get taskCompletedButton() {
		return getByClassName('percentage-circle');
	}

	get taskList() {
		return getByClassName('task-list');
	}

	get taskDetails() {
		return getById('task-details');
	}

	get taskDetailsMoreTab() {
		return cy.get('#task-details [data-tab="more"]');
	}

	get taskDetailsMoreTabDeleteButton() {
		return cy.get('[data-action=delete-task]');
	}

	get taskNameInput() {
		return getById('task-name-input');
	}

	visit() {
		cy.visit(TASKS_URL);
	}
}

export default Tasks;
