import { AuthPage } from '../pages/auth/auth.page';
import { DenyPage } from '../pages/deny/deny.page';
import { ExpressCatalogPage } from '../pages/express-catalog/express-catalog.page';
import { FormTestingObject } from '../shared/form-testing/form-testing.object';
import { urls } from '../support/urls';

const authPage = new AuthPage();
const expressCatalogPage = new ExpressCatalogPage();
const formTestingObject = new FormTestingObject();
const denyPage = new DenyPage();

describe('Доступ к разделу ограничен ', () => {
	it(' При прямом переходе  в  карточку авто незалогиненным', () => {
		cy.visit(urls.express.detailCar)
			.url()
			.should('contain', urls.express.deny);
	});

	it(' При  переходе  в  карточку авто незалогиненным из каталога', () => {
		cy.visit(urls.express.main)
			.get(expressCatalogPage.carItems)
			.first()
			.click()
			.get(authPage.loginForm.formLink)
			.find(formTestingObject.formButtons.closePopup)
			.click()
			.url()
			.should('contain', urls.express.deny);
	});

	describe('На странице ', () => {
		beforeEach(() => {
			cy.visit(urls.express.deny);
		});

		it('Переход в каталог по кнопке', () => {
			cy.get(denyPage.toCatalogButton)
				.click()
				.url()
				.should('contain', urls.express.main);
		});

		it('Выбрасывает в каталог  после входа', () => {
			cy.then(() => {
				authPage.loginWithProfy();
			})
				.url()
				.should('contain', urls.express.main);
		});
	});
});
