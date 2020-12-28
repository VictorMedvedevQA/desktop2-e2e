import { MainPage } from '../pages/main/main.page';
import { CarFilterObject } from '../shared/filter/cars-filter/car-filter.object';
import { ReviewGallerySpec } from '../shared/gallery/review-gallery/review-gallery.spec';
import { PaginationSpec } from '../shared/pagination/pagination.spec';
import { urls } from '../support/urls';
import { FilterSpec } from '../shared/filter/cars-filter/cars-filter.spec';
import { filterFields } from '../shared/filter/cars-filter/cars-filter-fields';
const filterObject = new CarFilterObject();
const filterSpec = new FilterSpec();
const mainPage = new MainPage();
const paginationSpec = new PaginationSpec();
const reviewGallerySpec = new ReviewGallerySpec();

describe('Геолокация', () => {
	beforeEach(() => {
		cy.server().visitRoute(urls.catalog.main);
	});

	it('смена города в фильтре на "Москва" при подтверждении города', () => {
		cy.get(mainPage.confirmCity.container)
			.find(mainPage.confirmCity.confirmCityButton)
			.click()
			.wait(2000)
			.get(mainPage.confirmCity.catalogCity)
			.invoke('text')
			.should('eq', 'Москва')
	})

	it('смена города в фильтре на "Ростов-на-Дону" при выборе города', () => {
		cy.get(mainPage.confirmCity.container)
			.find(mainPage.confirmCity.chooseCity.chooseCityButton)
			.click()
			.get(mainPage.confirmCity.chooseCity.container)
			.find(mainPage.confirmCity.chooseCity.selectCity)
			.click()
			.get(mainPage.confirmCity.chooseCity.rostov)
			.click()
			.get(mainPage.confirmCity.chooseCity.container)
			.find(mainPage.confirmCity.chooseCity.acceptButton)
			.click()
			.wait(2000)
			.get(mainPage.confirmCity.catalogCity)
			.invoke('text')
			.should('eq', 'Ростов-на-Дону')
	})
});

describe('Главная', () => {
	beforeEach(() => {
		cy.visitRoute(urls.mainPage.main);
	});

	it('Тултипы УТП', () => {
		cy.isTooltipsOpenAfterMousmove(mainPage.utpsText);
	});

	it('Переход в статьи', () => {
		cy.get(mainPage.news.link)
			.click()
			.url()
			.should('contains', '/blog');
	});

	it('Открытие блока инфо подробнее', () => {
		cy.blockIsOpenAfterClick(mainPage.seoText.showMore, mainPage.seoText.link);
	});

	it('Переход по якорной ссылке в каталог', () => {
		cy.get(mainPage.seoText.showMore)
			.click()
			.get(mainPage.seoText.link)
			.click()
			.url()
			.should('contains', '/cars');
	});

	it('При наведении на карточку появилась инфо', () => {
		cy.get(filterObject.carItem.auctionItemsResult)
			.first()
			.trigger('mouseover')
			.get(mainPage.carItems.info)
			.first()
			.should('be.visible');
	});

	it('Переход в detail-car по клику на auction-item', () => {
		cy.get(filterObject.carItem.auctionItemsResult)
			.first()
			.click()
			.url()
			.should('contains', '/car/');
	});

	filterSpec.isFilterWorking(filterFields);
	paginationSpec.isPaginationWorking(mainPage.pagination.container, filterObject.carItem.auctionItemsResult);
	reviewGallerySpec.isReviewGalleryWorking();
});
