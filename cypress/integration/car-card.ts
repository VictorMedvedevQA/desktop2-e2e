import { CarCardPage } from '../pages/car-card/car-card.page';
import { GallerySpec } from '../shared/gallery/gallery.spec';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { urls } from '../support/urls';

const carCardPage = new CarCardPage();
const gallerySpec = new GallerySpec();
const formTestingSpec = new FormTestingSpec();

describe('Секции', () => {
	beforeEach(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('переход по секциям', function() {
		cy.visitRoute(urls.carCard.main);
		cy.get(carCardPage.selectors.main.routerlinks)
			.each(item => {
				cy.wrap(item)
					.click()
					.wait(500)
					.then(el => {
						const routerlinkStatus = item.attr('class')
						expect(routerlinkStatus).to.contain('selected')
					});
			});
	});
});

describe('Попапы', () => {
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

describe.only('Работа галерей карточки Авто', () => {
	before(() => {
		cy.visitRoute(urls.carCard.main);
	});

	describe('основная галерея карточки автомобиля', () => {

		it('переход к галерее',() => {
			cy.get(carCardPage.selectors.main.openCarImage)
				.click();
		});
		gallerySpec.isGalleryWithoutDotsWorking(carCardPage.primaryGallery);
	});

	describe('Второстепенная Галерея автомобиля', () => {
		before(() => {
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

describe('Проверка поля "Техническое состояние"', () => {
	before(() => {
		cy.visitRoute(urls.carCard.main);
	});

	it('проверка количества кнопок в карте "кузова" и "салона"', () => {
		cy.get(carCardPage.selectors.condition.container)
			.find(carCardPage.selectors.condition.buttons)
			.should('have.length', carCardPage.selectors.condition.buttonsAmount);
	});

	it('проверка что кнопки с повреждениями работают', () => {
		cy.get(carCardPage.selectors.condition.container)
			.find(carCardPage.selectors.condition.damagedButtons)
			.each(el => {
				cy.wrap(el)
					.scrollIntoView()
					.click()
				cy.get(carCardPage.selectors.condition.damagedButtonPhoto)
					.first()
					.should('be.visible')
					.click()
				cy.get(carCardPage.selectors.condition.damagedButtonPhotoCloseButton)
					.click();
			});
	});
});

describe('Проверка поля "Комплектация и документы"', () => {

	it('переход на вкладку', () => {
		cy.get(carCardPage.selectors.equipment.equipmentIcon)
			.click();
	});

	it('наличие полей', () => {
		cy.get(carCardPage.selectors.equipment.container)
			.find(carCardPage.selectors.equipment.fields)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	});

	it('ссылки в "документы и комплектность автомобиля"', () => {
		cy.get(carCardPage.selectors.equipment.documentsContainer)
			.find(carCardPage.selectors.equipment.documentsButtons)
			.each(el => {
				cy.wrap(el)
					.click()
					.get(carCardPage.selectors.popup.popupGalleryContainer)
					.should('be.visible')
					.get(carCardPage.selectors.popup.popupCloseButton)
					.click();
			});
	});

	it('проверка перехода по ссылкам в "Подборки"', () => {
		cy.get(carCardPage.selectors.equipment.examplesContainer)
			.find(carCardPage.selectors.equipment.examplesLinks)
			.then(el => {
				for(let i = 0; i < el.length; i++){
					cy.get(carCardPage.selectors.equipment.examplesContainer)
						.find(carCardPage.selectors.equipment.examplesLinks)
						.eq(i)
						.then(el => {
							const href = el.attr('href');
							cy.wrap(el).click().url().should('contain', href)
						});
					cy.visitRoute(urls.carCard.main);
					cy.get(carCardPage.selectors.equipment.equipmentIcon)
						.click();
				};
			});
	});
});

describe('Проверка поля "Юридическая чистота"', () => {

	it('переход на вкладку', () => {
		cy.get(carCardPage.selectors.juridical.juridicalIcon)
			.click();
	});

	it('наличие полей', () => {
		cy.get(carCardPage.selectors.juridical.container)
			.find(carCardPage.selectors.juridical.fields)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	});

	it('кнопка "получить отчет Autoteka"', () => {
		cy.get(carCardPage.selectors.juridical.container)
			.find(carCardPage.selectors.juridical.autotekaReportButton)
			.click()
			.get(carCardPage.selectors.popup.popupContainer)
			.should('be.visible')
			.get(carCardPage.selectors.popup.popupCloseButton)
			.click();
	});
});

describe('Проверка поля "Адрес тест-драйва"', () => {

	it('переход на вкладку', () => {
		cy.get(carCardPage.selectors.location.locationIcon)
			.click();
	});

	it('проверка наличия карты', () => {
		cy.get(carCardPage.selectors.location.container)
			.find(carCardPage.selectors.location.mapField)
			.should('be.visible')
			.get('ymaps[title="Найти"]')
			.click()
			.get('ymaps input[class*="searchbox-input"]')
			.should('be.visible');
	});

	it('проверка работы кнопки "тест-драйв"', () => {
		cy.get(carCardPage.selectors.location.testDriveButton)
			.click()
			.get(carCardPage.selectors.popup.popupContainer)
			.should('be.visible')
			.find(carCardPage.selectors.popup.popupCloseButton)
			.click()
			.get(carCardPage.selectors.popup.popupContainer)
			.should('not.exist')
	});
});
