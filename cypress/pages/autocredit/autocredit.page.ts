import { IGallery } from '../../shared/gallery/gallery.object';

export class AutocreditPage {
	successPopup = '.b-form_success';

	public mainPopupForm = {
		formLink: 'am-popup .b-popup',
		openFormButton: '.b-faq .b-button',
		submitFormButton: '[type="submit"]',
	};
	public creditGallery: IGallery = {
		container: 'am-credit-gallery am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
	public failAssertion() {
		cy.get(this.successPopup).should('not.exist');
	}

	public refreshMainPopupForm() {
		cy.reload()
			.get(this.mainPopupForm.openFormButton)
			.click();
	}
}
