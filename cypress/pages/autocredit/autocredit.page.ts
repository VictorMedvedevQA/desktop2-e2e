import { IGallery } from '../../shared/gallery/gallery.object';

export class AutocreditPage {
	successPopup = '.b-form_success';

	public mainPopupForm = {
		formLink: 'am-popup .b-popup',
		openFormButton: '.b-faq .b-button',
		submitFormButton: '[type="submit"]',
	};

	public assertion() {
		cy.get(this.successPopup).should('not.exist');
	}

	public refreshmainPopupForm() {
		cy.reload()
			.get(this.mainPopupForm.openFormButton)
			.click();
	}
}
