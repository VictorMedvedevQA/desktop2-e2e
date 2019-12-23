export class PodborPage {
	successPopup = '.b-form_success';
	public heroForm = {
		formLink: '.b-form_hero',
		submitFormButton: '[type="submit"]',
	};

	public inlineFormFirst = {
		formLink: '.b-form_inline:first',
		submitFormButton: '[type="submit"]',
	};

	public inlineFormLast = {
		formLink: '.b-form_inline:last',
		submitFormButton: '[type="submit"]',
	};

	public matchHow = {
		container: 'am-match-how',
		btnBlock: '.b-information__btn-block',
		showCarsBtn: '.b-button:contains(Посмотреть авто в наличии )',
	};

	public mutchCarForMe = {
		formLink: 'am-popup .b-popup',
		openFormButton: '.b-button:contains(Подбор авто для меня)',
		submitFormButton: '[type="submit"]',
	};

	public refreshForm() {
		cy.reload();
	}

	public assertion() {
		cy.get(this.successPopup).should('not.exist');
	}

	public refreshMutchCarForMeForm() {
		cy.reload()
			.get(this.mutchCarForMe.openFormButton)
			.click();
	}
}
