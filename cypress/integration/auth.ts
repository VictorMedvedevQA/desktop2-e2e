import * as authFormData from '..//pages/auth/auth.form.data';
import { AuthPage } from '../pages/auth/auth.page';
import { FormTestingObject, validData } from '../shared/form-testing/form-testing.object';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { urls } from '../support/urls';
const authPage = new AuthPage();
const formTestingSpec = new FormTestingSpec();
const formTestingObject = new FormTestingObject();

describe('Авторизация', () => {
	beforeEach(() => {
		cy.visitRoute(urls.express.main);
	});

	describe('Форма "Вход"', () => {
		formTestingSpec.isPopupFormWorking(
			authPage.loginForm.formLink,
			authPage.loginForm.submitFormButton,
			authPage.loginForm.openFormButton,
			authPage.refreshLoginForm.bind(authPage),
			authPage.assertion
		);
	});

	it('Переход из попапа входа в попап регистрации по ссылке ', () => {
		cy.then(() => {
			authPage.refreshLoginForm();
		})
			.get(authPage.footerPopupLink)
			.contains('Регистрация')
			.click()
			.get(authPage.signupForm.formLink)
			.should('be.visible');
	});

	it('Очищаются данные после закрытия попапа ', () => {
		cy.then(() => {
			authPage.refreshLoginForm();
			formTestingObject.fillElements(
				authPage.loginForm.formLink,
				formTestingObject.createFieldsList(authPage.loginForm.formLink),
				validData
			);
		})
			.get(authPage.loginForm.submitFormButton)
			.should('be.enabled')
			.get(formTestingObject.formButtons.closePopup)
			.click()
			.get(authPage.loginForm.openFormButton)
			.click()
			.get(authPage.loginForm.submitFormButton)
			.should('be.disabled');
	});

	it('Логин в смешанном регистре', () => {
		cy.then(() => {
			authPage.refreshLoginForm();
			formTestingObject.fillElements(
				authPage.loginForm.formLink,
				formTestingObject.createFieldsList(authPage.loginForm.formLink),
				authFormData.mixedCaseLogin
			);
		})
			.get(authPage.loginForm.submitFormButton)
			.click()
			.wait('@me')
			.get(authPage.linkContainer)
			.contains('rbarinov@gmail.com')
			.should('be.visible');
	});

	describe('Форма "Забыли пароль"', () => {
		formTestingSpec.isPopupFormWorking(
			authPage.forgotPasswordForm.formLink,
			authPage.forgotPasswordForm.submitFormButton,
			authPage.forgotPasswordForm.openFormButton,
			authPage.refreshForgotPasswordForm.bind(authPage),
			authPage.assertion
		);
	});
});

describe('Регистрация', () => {
	beforeEach(() => {
		cy.visit(urls.express.main);
	});

	describe('Форма "Подтверждение номера телефона"', () => {
		formTestingSpec.isPopupFormWorking(
			authPage.confirmNumberFrom.formLink,
			authPage.confirmNumberFrom.submitFormButton,
			authPage.confirmNumberFrom.openFormButton,
			authPage.refreshСonfirmNumberFrom.bind(authPage),
			authPage.assertion
		);
	});

	describe('Форма "Регистрация"', () => {
		formTestingSpec.isPopupFormWorking(
			authPage.signupForm.formLink,
			authPage.signupForm.submitFormButton,
			authPage.signupForm.openFormButton,
			authPage.refreshSignupForm.bind(authPage),
			authPage.assertion
		);
	});

	it('Успешно отправили данные для регистрации', () => {
		cy.then(() => {
			authPage.refreshSignupForm();
			formTestingObject.sendValidData(authPage.signupForm.formLink, authPage.signupForm.submitFormButton);
		})
			.get(authPage.confirmNumberFrom.formLink)
			.should('contain', '70000000011');
	});

	it('Переход из попапа регистрации в попап входа  ', () => {
		cy.then(() => {
			authPage.refreshSignupForm();
		})
			.get(authPage.footerPopupLink)
			.contains('Вход')
			.click()
			.get(authPage.loginForm.formLink)
			.should('be.visible');
	});

	it('При возврате на "изменить номер" не сброшены заполненные данные', () => {
		cy.then(() => {
			authPage.refreshSignupForm();
			formTestingObject.sendValidData(authPage.signupForm.formLink, authPage.signupForm.submitFormButton);
		})
			.get(authPage.confirmNumberFrom.formLink)
			.should('contain', '70000000011')
			.get(authPage.insidePopupLink)
			.contains('Изменить номер телефона')
			.click()
			.get(authPage.signupForm.formLink)
			.find(authPage.signupForm.submitFormButton)
			.should('be.enabled');
	});
});
