import { IGallery } from '../../shared/gallery/gallery.object';

export class CarCardPage {
	public selectors = {
		main: {
			routerlinks: '.b-tab-panel__inner [routerlink]',
			openCarImage: '.b-slider_full-preview',
			carCreditPrice: '.b-card-price__description_xl.b-card-price__description_credit',
			creditMainBar: '.b-credit-main__inner_tab',
			creditMainBarButton: '.b-credit-item-tab__button',
			creditApplicationButton: 'amc-button:contains(Заявка на кредит)',
			testDriveApplicationButton: 'amc-button:contains(Связаться)',
			callbackApplicationButton: 'span.b-link',
			fillOutApplicationButton: '.b-credit-item-tab__button',
		},
		condition: {
			conditionIcon: '[routerlink="condition"]',
			container: 'am-car-condition-tab .b-container',
			buttons: '.b-bullet_damage',
			buttonsAmount: 46,
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
			autotekaReportButton: '.juristic__content .amc-button',
		},
		location: {
			locationIcon: '[routerlink="location"]',
			container: 'am-car-location-tab .b-section',
			mapField: '.b-router__map',
			testDriveButton: 'amc-section .b-button.b-router__btn',
			mapSearchButton: 'ymaps[title="Найти"]',
			mapSearchbar: 'ymaps input[class*="searchbox-input"]',

		},
		reviews: {
			reviewsIcon: '[routerlink="reviews"]',
			reviewsReportButton: 'amc-button:contains(Оставить свой отзыв)',
			carLink: 'am-car-reviews-tab review-item a',
			reviewItem: '.b-review__text:has(span)',
			reviewItemWrapper: '.b-review__text span',
		},
		popup: {
			popupContainer: '.b-popup__container',
			popupGalleryContainer: '.b-popup_gallery',
			popupSubmit: '.b-button',
			autotekaPopupSubmit: 'amc-button',
			popupCloseButton: '.b-popup-close',
			popupSuccess: '.b-form_success',
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
		container: 'amc-row[amc-hide-tablet]',
		items: '.car-ratings__card',
		left: '.b-slider__arrow_prev',
		right: '.b-slider__arrow_next:first',
	}

	public similarGallery: IGallery = {
		container: 'am-car-similar am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	}

	public refreshCreditPopupForm() {
		cy.reload()
			.get(this.selectors.main.creditApplicationButton)
			.click();
	}

	public refreshTestDrivePopupForm() {
		cy.reload()
			.get(this.selectors.main.testDriveApplicationButton)
			.click();
	}

	public refreshCallBackPopupForm() {
		cy.reload()
			.get(this.selectors.main.callbackApplicationButton)
			.click();
	}

	public refreshFilloutPopupForm() {
		cy.reload()
			.get(this.selectors.main.fillOutApplicationButton)
			.click();
	}

	public refreshAutotekaPopupForm() {
		cy.reload()
			.get(this.selectors.juridical.juridicalIcon)
			.click()
			.get(this.selectors.juridical.autotekaReportButton)
			.click();
	}

	public refreshReviewPopupForm() {
		cy.reload()
			.get(this.selectors.reviews.reviewsIcon)
			.click()
			.get(this.selectors.reviews.reviewsReportButton)
			.click();
	}

	public failAssertion() {
		cy.get(this.selectors.popup.popupSuccess).should('not.exist');
	}
}
