import { getByClassName, getById } from '../selectors';

const LANDING_URL = 'https://app.ayoa.com/';
const LOGOUT_URL = 'https://app.ayoa.com/logout';

class Landing {
	static instance = null;

	static initialised() {
		return Landing.instance ? true : false;
	}

	static getInstance() {
		if (!Landing.initialised()) {
			Landing.instance = new Landing();
		}
		return Landing.instance;
	}

	get burgerMenuButton() {
		return getByClassName('menu-burger');
	}

	get closeOnBoardingButton() {
		return getByClassName('dismiss-btn');
	}

	get logoutButton() {
		return cy.get('.sidebar-menu-item.btn-logout');
	}

	logout() {
		cy.visit(LOGOUT_URL);
	}

	get tasksButton() {
		return getById('header-planner');
	}

	visit() {
		cy.visit(LANDING_URL);
	}
}

export default Landing;
