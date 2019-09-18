import { CatalogPage } from '../pages/catalog/catalog.page';
import { CarsTagsGallerySpec } from '../shared/gallery/cars-tags-gallery/cars-tags-gallery.spec';
import { GallerySpec } from '../shared/gallery/gallery.spec';
import { SeoLinksSpec } from '../shared/seo/links/seo-links.spec';
import { urls } from '../support/urls';

const carsTagsGallerySpec = new CarsTagsGallerySpec();
const catalogPage = new CatalogPage();
const gallerySpec = new GallerySpec();
const seoLinksSpec = new SeoLinksSpec();

describe('Галерея "похожие авто"', () => {
	beforeEach(() => {
		cy.server().visit(urls.catalog.filterredAudi);
	});

	it('Если  отфильтровано и есть авто  => "похожие авто"', () => {
		cy.get(catalogPage.galleries.similarGalleryContainer).should('be.visible');
	});
	gallerySpec.isGalleryWorking(catalogPage.galleries.similarGalleryContainer);
	gallerySpec.checkingClickItemRedirect(
		catalogPage.galleries.similarGalleryContainer,
		catalogPage.galleries.urlCheckingClickItemCarsGallery
	);
});

describe('Галерея "авто в наличии"', () => {
	beforeEach(() => {
		cy.server().visit(urls.catalog.main);
	});

	it('Если не отфильтровано => "авто в наличии"', () => {
		cy.get(catalogPage.galleries.carsGalleryContainer).should('be.visible');
	});

	it('Если  отфильтровано и нет авто  => "авто в наличии"', () => {
		cy.visit(urls.catalog.filterredNoCar)
			.get(catalogPage.galleries.carsGalleryContainer)
			.should('be.visible');
	});
	gallerySpec.isGalleryWorking(catalogPage.galleries.carsGalleryContainer);
	gallerySpec.checkingClickItemRedirect(
		catalogPage.galleries.carsGalleryContainer,
		catalogPage.galleries.urlCheckingClickItemCarsGallery
	);
});

describe('Галерея "подборки авто"', () => {
	describe('Скролл', () => {
		beforeEach(() => {
			cy.server().visit(urls.catalog.main);
		});
		gallerySpec.isGalleryWorking(catalogPage.galleries.carsTagsGalleryContainer);
	});

	describe('Применение тега', () => {
		carsTagsGallerySpec.isCarsTagsGalleryWorking(catalogPage.galleries.carsTagsGalleryContainer);
	});
});

seoLinksSpec.isSeoLinksWorking();

describe('Проданные авто', () => {
	beforeEach(() => {
		cy.visit(urls.catalog.filterredAudiA1);
	});

	it('Показать проданные авто', () => {
		cy.get(catalogPage.catalog.soldCars)
			.should('not.be.visible')
			.get(catalogPage.catalog.showSoldCars)
			.click();
		// tslint:disable-next-line:no-unused-expression
		expect(catalogPage.catalog.soldCars).to.exist;
	});

	it('Скрыть проданные авто', () => {
		cy.get(catalogPage.catalog.showSoldCars)
			.click()
			.get(catalogPage.catalog.hideSoldCars)
			.click();
		// tslint:disable-next-line:no-unused-expression
		expect(catalogPage.catalog.soldCars).not.visible;
	});
});
