# ayoa

Exercise AYOA interface using Cypress.

The project now includes a Cucumber abstration / preprocessor to enable a BDD approach to the testing. For flexibility I've enabled the Javascript and Feature files to co-exist.

Example Feature file:

```
Scenario: Go to homepage and login
	Given I open the homepage
	When I click the login button in the menu
	And I enter my sign in with email credentials
	And I click the sign in button
	Then I see the landing page
```

vs the original Javascript version for the same functionality

```javascript
loginPage.visit();
loginPage.loginButton.click();
loginPage.emailInput.type(Cypress.env('username'));
loginPage.passwordInput.type(Cypress.env('password'));
loginPage.signInWithEmailButton.click();
landingPage.closeOnBoardingButton.should('be.visible');
```

## To run

```sh
npm i
```

Add your credentials into the cypress.json file

```json
{
	"env": {
		"username": "YOUR_USERNAME",
		"password": "YOUR_PASSWORD"
	}
}
```

```sh
npx cypress open
```

or for continunous integration mode

```sh
npx cypress run
```

Video: https://youtu.be/F5oQhbhIZvs
