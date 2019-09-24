import { AuthPage } from '../pages/auth/auth.page';
import { ExpressCatalogPage } from '../pages/express-catalog/express-catalog.page';
import { FormTestingObject } from '../shared/form-testing/form-testing.object';
import { urls } from '../support/urls';

const expressCatalogPage = new ExpressCatalogPage();
const authPage = new AuthPage();
const formTestingObject = new FormTestingObject();

describe('Детальная страница авто в экспресс-аукционах ', () => {
	it('Переход в карточку залогиненым из каталога', () => {
		cy.visitRoute(urls.express.main)
			.get(expressCatalogPage.carItems)
			.first()
			.click()
			.get(authPage.loginForm.formLink)
			.then(() => {
				formTestingObject.sendValidData(authPage.loginForm.formLink, authPage.loginForm.submitFormButton);
			});
	});
});
