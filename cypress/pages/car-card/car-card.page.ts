import { IGallery } from '../../shared/gallery/gallery.object';
import { urls } from '../../support/urls';

export class CarCardPage {
	public carCardSelectors = {
		main: {
			openCarImage: '.b-slider_full-preview',
			carCreditPrice: '.b-card-price__description_xl.b-card-price__description_credit',
			creditMainBar: '.b-credit-main__inner_tab',
			creditMainBarButton: '.b-credit-item-tab__button',
		},
		condition: {
			conditionIcon: '[routerlink="condition"]',
			container: 'am-car-condition-tab .b-container',
			buttons: '.b-bullet_damage',
			buttonsAmount: 35,
			damagedButtons: '.b-bullet_damage-intermidiate,.b-bullet_damage-light,.b-bullet_damage-significant',
			damagedButtonPhoto: 'am-tooltip-gallery .b-tooltip',
			damagedButtonPhotoCloseButton: '.b-popup-close_gallery',
		},
		equipment: {
			equipmentIcon: '[routerlink="equipment"]',
			container: 'am-car-equipment-tab .b-container',
			fields: '.b-col-container',
			documentsContainer: '.b-col-container:has(h2:contains(Документы и комплектность автомобиля))',
			documentsButtons: 'amc-text',
			examplesContainer: '.b-col-container:has(h2:contains(Подборки))',
			examplesLinks: 'a.b-tag_link',
		},
		juridical: {
			juridicalIcon: '[routerlink="juridical"]',
			container: 'am-car-juristic-tab .b-container',
			fields: '.juristic__row',
			autotekaReportButton: 'amc-button',
		},
		location: {
			locationIcon: '[routerlink="location"]',
			container: 'am-car-location-tab .b-section',
			mapField: '.b-router__map',
			testDriveButton: '.b-router__btn',
		},
		popup: {
			popupContainer: '.b-popup__container',
			popupGalleryContainer: '.b-popup_gallery',
			popupCloseButton: '.b-popup-close',
		}
	}

	public primaryGallery: IGallery = {
		container: '.b-gallery-preview_popup',
		items: 'am-gallery-popup-preview-item .b-slider__item img',
		left: '.b-foto-gallery-arrow_prev',
		right: '.b-foto-gallery-arrow_next',
	}

	public secondaryGallery: IGallery = {
		container: '.b-slider.b-slider_preview.ng-star-inserted',
		items: 'am-gallery-preview-item',
		left: '.b-gallery-preview-arrow_prev',
		right: '.b-gallery-preview-arrow_next',
	}

	public advantagesGallery: IGallery = {
		container: '.b-auto__rating',
		items: '.car-ratings__card',
		left: '.b-slider__arrow_prev',
		right: '.b-slider__arrow_next',
	}

	public similarGallery: IGallery = {
		container: 'am-car-similar am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	}

//проверка основных элементов страницы карточки авто
	public creditButtonIsWorking(){
		cy.get(this.carCardSelectors.main.carCreditPrice).click()
			//добавить проверку на прокрутку страницы к форме кредита
			.get(this.carCardSelectors.main.creditMainBarButton).click()
			.get(this.carCardSelectors.popup.popupContainer).should('be.visible')
			.get(this.carCardSelectors.popup.popupCloseButton).click()
	}

//проверка поля "техническое состояние"
	public isCarDamageMapButtonsPresent(){
		cy.get(this.carCardSelectors.condition.container)
			.find(this.carCardSelectors.condition.buttons)
			.should('have.length', this.carCardSelectors.condition.buttonsAmount);
	}

	public isCarDamageMapButtonsWorking(){
		cy.get(this.carCardSelectors.condition.container)
			.find(this.carCardSelectors.condition.damagedButtons)
			.each(el => {
				cy.wrap(el)
					.scrollIntoView()
					.click()
				cy.get(this.carCardSelectors.condition.damagedButtonPhoto)
					.first()
					.should('be.visible')
					.click()
				cy.get(this.carCardSelectors.condition.damagedButtonPhotoCloseButton)
					.click();
			});
	}

//Проверка поля "Комплектация и документы"
	public goToEquipment(){
		cy.get(this.carCardSelectors.equipment.equipmentIcon)
			.click()
			.invoke('attr', 'class')
			.then(attr => {
				expect(attr).to.contains('selected');
			})
			.get(this.carCardSelectors.equipment.container)
			.should('be.visible')
	}

	public isEquipmentFieldsPresent(){
		cy.get(this.carCardSelectors.equipment.container)
			.find(this.carCardSelectors.equipment.fields)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	}

	public isDocumentsPopupsWorking(){
		cy.get(this.carCardSelectors.equipment.documentsContainer)
			.find(this.carCardSelectors.equipment.documentsButtons)
			.each(el => {
				cy.wrap(el)
					.click()
					.get(this.carCardSelectors.popup.popupGalleryContainer)
					.should('be.visible')
					.get(this.carCardSelectors.popup.popupCloseButton)
					.click();
			});
	}

	public isCollectionsLinksWorking(){
		cy.get(this.carCardSelectors.equipment.examplesContainer)
			.find(this.carCardSelectors.equipment.examplesLinks)
			.then(el => {
				for(let i = 0; i < el.length; i++){
					cy.get(this.carCardSelectors.equipment.examplesContainer)
						.find(this.carCardSelectors.equipment.examplesLinks)
						.eq(i)
						.then(el => {
							const href = el.attr('href');
							cy.wrap(el).click().url().should('contain', href)
						});
					cy.visitRoute(urls.carCard.main);
					cy.get(this.carCardSelectors.equipment.equipmentIcon)
						.click();
				};
			});
	}

//Проверка поля "Юридическая чистота"
	public goToJuridical(){
		cy.get(this.carCardSelectors.juridical.juridicalIcon)
			.click()
			.invoke('attr', 'class')
			.then(attr => {
				expect(attr).to.contains('selected')
			})
			.get(this.carCardSelectors.juridical.container)
			.should('be.visible');
	}

	public isJuridicalFieldsPresent(){
		cy.get(this.carCardSelectors.juridical.container)
			.find(this.carCardSelectors.juridical.fields)
			.each(el => {
				cy.wrap(el).should('be.visible');
			});
	}

	public isAutotekaButtonWorking(){
		cy.get(this.carCardSelectors.juridical.container)
			.find(this.carCardSelectors.juridical.autotekaReportButton)
			.click()
			.get(this.carCardSelectors.popup.popupContainer)
			.should('be.visible')
			.get(this.carCardSelectors.popup.popupCloseButton)
			.click();
	}

//Проверка поля "Адрес тест-драйва"
	public goToLocation(){
		cy.get(this.carCardSelectors.location.locationIcon)
			.click()
			.invoke('attr', 'class')
			.then(attr => {
				expect(attr).to.contains('selected');
			})
			.get(this.carCardSelectors.location.container)
			.should('be.visible');
	}

	public isMapPresent(){
		cy.get(this.carCardSelectors.location.container)
			.find(this.carCardSelectors.location.mapField)
			.should('be.visible');
	}

	public isTestDriveFormWorking(){
		cy.get(this.carCardSelectors.location.testDriveButton)
			.click()
			.get(this.carCardSelectors.popup.popupContainer)
			.should('be.visible')
			.get(this.carCardSelectors.popup.popupCloseButton)
			.click();
	}
}
