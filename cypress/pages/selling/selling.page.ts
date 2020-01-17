export class SellingPage {
	successPopup = '.b-form_success';
	public heroForm = {
		formLink: '.b-form_hero',
		submitFormButton: '[type="submit"]',
	};

	public inlineForm = {
		formLink: '.b-form_inline',
		submitFormButton: '[type="submit"]',
	};

	public refreshForm() {
		cy.reload();
	}

	public failAssertion() {
		cy.get(this.successPopup).should('not.exist');
	}
}
