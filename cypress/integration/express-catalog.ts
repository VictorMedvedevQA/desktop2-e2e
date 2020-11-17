import { AuthPage } from '../pages/auth/auth.page';
import { ExpressCatalogPage } from '../pages/express-catalog/express-catalog.page';
import { PaginationSpec } from '../shared/pagination/pagination.spec';
import { urls } from '../support/urls';
import { ExpressFilterSpec } from '../shared/filter/express-filter/express-filter.spec';
import { filterFields } from '../shared/filter/express-filter/express-filter-fields';

const paginationSpec = new PaginationSpec();
const authPage = new AuthPage();
const expressCatalogPage = new ExpressCatalogPage();
const expressFilterSpec = new ExpressFilterSpec();

describe('Видимость к-ва ставок и текущей ставки ', () => {
	beforeEach(() => {
		cy.visitRoute(urls.express.main);
	});
	expressFilterSpec.isExpressFilterWorking(filterFields);
	it('Если не залогинены - не видим ставку и к-во ставок ', () => {
		cy.get(authPage.loginForm.openFormButton)
			.should('be.visible')
			.get(expressCatalogPage.price)
			.should('not.be.visible');
	});

	it('Если залогинены - видим ставку и к-во ставок ', () => {
		cy.then(() => {
			authPage.loginWithProfy();
		})
			.get(expressCatalogPage.price)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	});

	describe('Пагинация', () => {
		paginationSpec.isPaginationWorking(
			expressCatalogPage.pagination.container,
			expressCatalogPage.carItem.expressItemsResult
		);
	});
});

describe('проверка работы кнопки "Получить статус Профи"', () => {
	before(() => {
		cy.visitRoute(urls.express.main);
	});
	it('кнопка появляется и активна', () => {
		cy.then(() => {
			authPage.loginWithNoProfy();
		})
			.get(expressCatalogPage.carItems)
			.eq(0)
			.click()
			.get(expressCatalogPage.getProfy)
			.click()
			.get(expressCatalogPage.successPopup)
			.should('be.visible')
	});
});
