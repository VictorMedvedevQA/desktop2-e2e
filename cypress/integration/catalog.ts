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
		cy.visitRoute(urls.catalog.filterredAudi);
	});

	it('Если  отфильтровано и есть авто  => "похожие авто"', () => {
		cy.get(catalogPage.similarGallery.container).should('be.visible');
	});
	gallerySpec.isGalleryWorking(catalogPage.similarGallery);
	gallerySpec.checkingClickItemRedirect(catalogPage.similarGallery, catalogPage.urlCheckingClickItemCarsGallery);
});

describe('Галерея "авто в наличии"', () => {
	beforeEach(() => {
		cy.server().visitRoute(urls.catalog.main);
	});

	it('Если не отфильтровано => "авто в наличии"', () => {
		cy.get(catalogPage.carsGallery.container)
			.scrollIntoView()
			.should('be.visible');
	});

	it('Если  отфильтровано и нет авто  => "авто в наличии"', () => {
		cy.visitRoute(urls.catalog.filterredNoCar)
			.get(catalogPage.carsGallery.container)
			.should('be.visible');
	});
	gallerySpec.isGalleryWorking(catalogPage.carsGallery);
	gallerySpec.checkingClickItemRedirect(catalogPage.carsGallery, catalogPage.urlCheckingClickItemCarsGallery);
});

describe('Галерея "подборки авто"', () => {
	beforeEach(() => {
		cy.server().visitRoute(urls.catalog.main);
	});
	carsTagsGallerySpec.isCarsTagsGalleryWorking();
});

seoLinksSpec.isSeoLinksWorking();

describe('Проданные авто', () => {
	beforeEach(() => {
		cy.visitRoute(urls.catalog.filterredAudiA1);
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
