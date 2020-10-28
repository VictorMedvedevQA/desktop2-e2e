export class PodborPage {
	successPopup = '.b-form_success';
	public heroForm = {
		formLink: '.b-form_hero',
		submitFormButton: '.amc-button:contains(Подобрать авто)',
	};

	public matchHow = {
		container: 'am-match-how',
		btnBlock: '.b-information__btn-block',
		showCarsBtn: '.b-button:contains(Посмотреть авто в наличии )',
	};

	public mutchCarForMe = {
		formLink: 'form.b-form_hero',
		openFormButton: '.b-button:contains(Подбор авто для меня)',
		submitFormButton: '[type="submit"]',
	};

	public refreshForm() {
		cy.reload();
	};

	public failAssertion() {
		cy.get(this.heroForm.submitFormButton).invoke('attr', 'class').then(el => {
			expect(el).contain('disabled');
		});
	};

	public refreshMutchCarForMeForm() {
		cy.reload()
			.get(this.mutchCarForMe.openFormButton)
			.click();
	};
}
