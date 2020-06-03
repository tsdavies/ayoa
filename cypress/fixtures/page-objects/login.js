import { getByInputName } from '../selectors';

const LOGIN_URL = 'https://www.ayoa.com/';

class Login {
	static instance = null;

	static initialised() {
		return Login.instance ? true : false;
	}

	static getInstance() {
		if (!Login.initialised()) {
			Login.instance = new Login();
		}
		return Login.instance;
	}

	get emailInput() {
		return getByInputName('email');
	}

	get passwordInput() {
		return getByInputName('password');
	}

	get loginButton() {
		return cy.get('.nav-combo').click().first().contains('Log In');
	}

	get signInWithEmailButton() {
		return cy.get('button').contains('Sign in with Email');
	}

	visit() {
		cy.visit(LOGIN_URL);
	}
}

export default Login;
