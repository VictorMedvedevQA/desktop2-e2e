import { FormTestingObject, validData } from '../../shared/form-testing/form-testing.object';
import { urls } from '../../support/urls';

const formTestingObject = new FormTestingObject();

export class AuthPage {
	public linkContainer = '.link_container';
	public insidePopupLink = ' a.amc-link';
	public footerPopupLink = `.b-popup-footer__link ${this.insidePopupLink}`;
	public commonLink = 'am-popup .b-popup';
	public commonSubmit = '[type="submit"]';

	public loginForm = {
		formLink: this.commonLink,
		openFormButton: `${this.linkContainer}:contains(Вход)`,
		submitFormButton: this.commonSubmit,
	};

	public signupForm = {
		formLink: this.commonLink,
		openFormButton: `${this.linkContainer}:contains(Регистрация)`,
		submitFormButton: this.commonSubmit,
	};

	public confirmNumberFrom = {
		formLink: `${this.commonLink}:contains(Регистрация)`,
		openFormButton: `${this.linkContainer}:contains(Регистрация)`,
		submitFormButton: this.commonSubmit,
	};

	public forgotPasswordForm = {
		formLink: `${this.commonLink}:contains(Восстановление пароля )`,
		openFormButton: `${this.footerPopupLink}:contains(Регистрация)`,
		submitFormButton: this.commonSubmit,
	};

	public loginWithProfy() {
		cy.get(this.loginForm.openFormButton)
			.click()
			.then(() => {
				formTestingObject.sendValidData(this.loginForm.formLink, this.loginForm.submitFormButton);
			});
	}

	public refreshLoginForm() {
		cy.visitRoute(urls.express.main)
			.get(this.loginForm.openFormButton)
			.click()
			.get(this.loginForm.formLink);
	}

	public refreshSignupForm() {
		cy.visitRoute(urls.express.main)
			.get(this.signupForm.openFormButton)
			.click()
			.get(this.loginForm.formLink);
	}

	public refreshСonfirmNumberFrom() {
		cy.visitRoute(urls.express.main)
			.then(() => {
				this.refreshSignupForm();
				formTestingObject.sendValidData(this.signupForm.formLink, this.signupForm.submitFormButton);
			})
			.get(this.confirmNumberFrom.formLink)
			.should('contain', formTestingObject.findDataByFieldName('phoneNumber', validData));
	}

	public refreshForgotPasswordForm() {
		cy.visitRoute(urls.express.main)
			.then(() => {
				this.refreshLoginForm();
			})
			.get(this.loginForm.formLink)
			.get(this.footerPopupLink)
			.contains('Забыли пароль?')
			.click()
			.get(this.forgotPasswordForm.formLink)
			.should('be.visible');
	}
	public assertion() {
		cy.get(this.commonLink)
			.find(this.commonSubmit)
			.should('be.disabled');
	}
	public successAssertion() {
		cy.get(this.confirmNumberFrom.formLink).should(
			'contain',
			formTestingObject.findDataByFieldName('phoneNumber', validData)
		);
	}
}
