import { CarCardPage } from '../../pages/car-card/car-card.page';
import { urls } from '../../support/urls';

const carCardPage = new CarCardPage();

export class CarCardObject {
//проверка основной страницы
	public goThroughTheButtons(){
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
	}

//проверка поля "техническое состояние"
	public isCarDamageMapButtonsPresent() {
		cy.get(carCardPage.selectors.condition.container)
			.find(carCardPage.selectors.condition.buttons)
			.should('have.length', carCardPage.selectors.condition.buttonsAmount);
	}

	public isCarDamageMapButtonsWorking(){
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
	}

//Проверка поля "Комплектация и документы"
	public isEquipmentFieldsPresent(){
		cy.get(carCardPage.selectors.equipment.container)
			.find(carCardPage.selectors.equipment.fields)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	}

	public isDocumentsPopupsWorking(){
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
	}

	public isCollectionsLinksWorking(){
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
	}

//Проверка поля "Юридическая чистота"
	public isJuridicalFieldsPresent(){
		cy.get(carCardPage.selectors.juridical.container)
			.find(carCardPage.selectors.juridical.fields)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	}

	public isAutotekaButtonWorking(){
		cy.get(carCardPage.selectors.juridical.container)
			.find(carCardPage.selectors.juridical.autotekaReportButton)
			.click()
			.get(carCardPage.selectors.popup.popupContainer)
			.should('be.visible')
			.get(carCardPage.selectors.popup.popupCloseButton)
			.click();
	}

//Проверка поля "Адрес тест-драйва"
	public isMapWorking(){
		cy.get(carCardPage.selectors.location.container)
			.find(carCardPage.selectors.location.mapField)
			.should('be.visible')
			.get('ymaps[title="Найти"]')
			.click()
			.get('ymaps input[class*="searchbox-input"]')
			.should('be.visible');
	}

	public isTestDrivePresent(){
		cy.get(carCardPage.selectors.location.testDriveButton)
			.click()
			.get(carCardPage.selectors.popup.popupContainer)
			.should('be.visible')
			.find(carCardPage.selectors.popup.popupCloseButton)
			.click()
			.get(carCardPage.selectors.popup.popupContainer)
			.should('not.exist')
	}
}