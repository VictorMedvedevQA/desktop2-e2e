import { CarCardPage } from '../pages/car-card/car-card.page';
import { GallerySpec } from '../shared/gallery/gallery.spec';
import { urls } from '../support/urls';

const gallerySpec = new GallerySpec();
const carCardPage = new CarCardPage();

describe('проверка работы основных кнопок на странице карточки Авто', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('элементы кредита работают', () => {
		carCardPage.creditButtonIsWorking()
	});

});

describe('Галерея карточки автомобиля', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
		cy.get(carCardPage.carCardSelectors.main.openCarImage).click();
	});
	gallerySpec.isGalleryWithoutDotsWorking(carCardPage.primaryGallery);
});

describe('Второстепенная Галерея автомобиля', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('Галерея работает', () => {
		cy.get(carCardPage.secondaryGallery.container).should('be.visible');
	});
});

describe('Галерея "преимущества"', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('Галерея работает', () => {
		cy.get(carCardPage.advantagesGallery.container).should('be.visible');
	});
	gallerySpec.isGalleryWorking(carCardPage.advantagesGallery);
});

describe('Галерея "похожие автомобили"', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('Галерея работает', () => {
		cy.get(carCardPage.similarGallery.container).should('be.visible');
	});
	gallerySpec.isGalleryWorking(carCardPage.similarGallery);
});

describe('Проверка поля "техническое состояние"', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('проверка количества кнопок в карте "кузова" и "салона"', () => {
		carCardPage.isCarDamageMapButtonsPresent();
	});

	it('проверка что кнопки с повреждениями работают', () => {
		carCardPage.isCarDamageMapButtonsWorking();
	});
});

describe('Проверка поля "Комплектация и документы"', () => {

	it('переход на вкладку', () => {
		carCardPage.goToEquipment();
	});

	it('наличие полей', () => {
		carCardPage.isEquipmentFieldsPresent();
	});

	it('ссылки в "документы и комплектность автомобиля"', () => {
		carCardPage.isDocumentsPopupsWorking();
	});

	it('проверка перехода по ссылкам в "Подборки"', () => {
		carCardPage.isCollectionsLinksWorking();
	});
});

describe('Проверка поля "Юридическая чистота"', () => {

	it('переход на вкладку', () => {
		carCardPage.goToJuridical();
	});

	it('наличие полей', () => {
		carCardPage.isJuridicalFieldsPresent();
	});

	it('кнопка "получить отчет Autoteka"', () => {
		carCardPage.isAutotekaButtonWorking();
	});
});

describe('Проверка поля "Адрес тест-драйва"', () => {

	it('переход на вкладку', () => {
		carCardPage.goToLocation();
	});

	it('проверка наличия карты', () => {
		carCardPage.isMapPresent();
	});

	it('кнопка "Записаться на тест-драйв"', () => {
		carCardPage.isTestDriveFormWorking();
	});
});
