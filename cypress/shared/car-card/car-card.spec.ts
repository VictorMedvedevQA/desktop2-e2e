import { CarCardObject } from './car-card.object';
import { CarCardPage } from '../../pages/car-card/car-card.page';
import { urls } from '../../support/urls';
import { GallerySpec } from '../gallery/gallery.spec';
import { FormTestingSpec } from '../form-testing/form-testing.spec';
import { GalleryObject } from '../gallery/gallery.object';

const galleryObject = new GalleryObject();
const carCardObject = new CarCardObject();
const carCardPage = new CarCardPage();
const gallerySpec = new GallerySpec();
const formTestingSpec = new FormTestingSpec();

export class CarCardSpec {
	public sectionButtonsTest() {
		describe('секции', () => {

			it('переход по секциям', function() {
				cy.visitRoute(urls.carCard.main);
				carCardObject.goThroughTheButtons();
			});
		});
	}

	public galleryTest() {
		describe('Работа галерей карточки Авто', () => {

			describe('основная галерея карточки автомобиля', () => {
				beforeEach(() => {
					cy.visitRoute(urls.carCard.main);
					cy.get(carCardPage.selectors.main.openCarImage).click();
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
		});
	}

	public mainPageFormsTesting(){
	describe('попапы', () => {
		beforeEach(() => {
			cy.visitRoute(urls.carCard.main);
		});

		describe('тест формы "Заявка на кредит"',() => {
			formTestingSpec.isPopupFormWorking(
				carCardPage.selectors.popup.popupContainer,
				carCardPage.selectors.popup.popupSubmit,
				carCardPage.selectors.main.creditApplicationButton,
				carCardPage.refreshCreditPopupForm.bind(carCardPage),
				carCardPage.failAssertion.bind(carCardPage)
			);
		});

		describe('тест формы "Записаться на тест-драйв"',() => {
			formTestingSpec.isPopupFormWorking(
				carCardPage.selectors.popup.popupContainer,
				carCardPage.selectors.popup.popupSubmit,
				carCardPage.selectors.main.testDriveApplicationButton,
				carCardPage.refreshTestDrivePopupForm.bind(carCardPage),
				carCardPage.failAssertion.bind(carCardPage)
			);
		});

		describe('тест формы "Обратный звонок"',() => {
			formTestingSpec.isPopupFormWorking(
				carCardPage.selectors.popup.popupContainer,
				carCardPage.selectors.popup.popupSubmit,
				carCardPage.selectors.main.callbackApplicationButton,
				carCardPage.refreshCallBackPopupForm.bind(carCardPage),
				carCardPage.failAssertion.bind(carCardPage)
			);
		});

		describe('тест формы "Заполнить заявку" в поле Кредит',() => {
			formTestingSpec.isPopupFormWorking(
				carCardPage.selectors.popup.popupContainer,
				carCardPage.selectors.popup.popupSubmit,
				carCardPage.selectors.main.fillOutApplicationButton,
				carCardPage.refreshFilloutPopupForm.bind(carCardPage),
				carCardPage.failAssertion.bind(carCardPage)
			);
		});
	});

	}

	public conditionTest(){
		describe('работа карты повреждений', () => {
			beforeEach(() => {
				cy.visitRoute(urls.carCard.main);
			});

			it('проверка количества кнопок в карте "кузова" и "салона"', () => {
				carCardObject.isCarDamageMapButtonsPresent();
			});

			it('проверка что кнопки с повреждениями работают', () => {
				carCardObject.isCarDamageMapButtonsWorking();
			});
		});
	}

	public equipmentTest(){
		describe('общая проверка формы', () => {

			it('переход на вкладку', () => {
				cy.get(carCardPage.selectors.equipment.equipmentIcon)
					.click();
			});

			it('наличие полей', () => {
				carCardObject.isEquipmentFieldsPresent();
			});

			it('ссылки в "документы и комплектность автомобиля"', () => {
				carCardObject.isDocumentsPopupsWorking();
			});

			it('проверка перехода по ссылкам в "Подборки"', () => {
				carCardObject.isCollectionsLinksWorking();
			});
		});
	}

	public juridicalTest(){
		describe('общая проверка формы', () => {

			it('переход на вкладку', () => {
				cy.get(carCardPage.selectors.juridical.juridicalIcon)
					.click();
			});

			it('наличие полей', () => {
				carCardObject.isJuridicalFieldsPresent();
			});

			it('кнопка "получить отчет Autoteka"', () => {
				carCardObject.isAutotekaButtonWorking();
			});
		});
	}

	public locationTest(){
		describe('общий тест формы', () => {

			it('переход на вкладку', () => {
				cy.get(carCardPage.selectors.location.locationIcon)
					.click();
			});

			it('проверка наличия карты', () => {
				carCardObject.isMapWorking();
			});

			it('проверка работы кнопки "тест-драйв"', () => {
				carCardObject.isTestDrivePresent();
			});
		});
	}
}