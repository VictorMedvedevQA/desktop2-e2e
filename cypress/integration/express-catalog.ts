import { AuthPage } from '../pages/auth/auth.page';
import { ExpressCatalogPage } from '../pages/express-catalog/express-catalog.page';
import { filterFields } from '../pages/express-catalog/filter-fields';
import { FilterSpec } from '../shared/filter/filter.spec';
import { PaginationSpec } from '../shared/pagination/pagination.spec';
import { urls } from '../support/urls';

const paginationSpec = new PaginationSpec();
const authPage = new AuthPage();
const expressCatalogPage = new ExpressCatalogPage();
const filterSpec = new FilterSpec();

describe('Видимость к-ва ставок и текущей ставки ', () => {
	beforeEach(() => {
		cy.visitRoute(urls.express.main);
	});

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

	describe('Фильтр', () => {
		filterSpec.isFilterWorking(filterFields);
	});
});