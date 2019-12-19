import { urls } from '../../../support/urls';
import { IAutocreditFilterField } from './autocredit-filter-fields';

export class AutocreditFilterObject {
	public creditCalculator = {
		container: '.b-credit-calculator',
		submit: '[type="submit"]',
	};

	public creditCard = {
		creditCard: 'am-credit-card',
		auctionDetail: {
			auctionDetail: 'am-auction-details',
			auctionDetailInfo: 'am-auction-details-info',
			title: '.b-card-horizontal__h3',
			makeModel: '.b-text_strong-bold',
		},
	};

	public activateField(field: IAutocreditFilterField) {
		cy.url()
			.then(() => {
				// tslint:disable-next-line:switch-default
				switch (field.fieldType) {
					case 'inputAutocomplete':
						{
							if (
								field.name !== 'Модель' &&
								field.formcontrolname &&
								field.inputData &&
								field.outputData
							) {
								cy.get(field.formcontrolname).inputAutocomplete(field.inputData, field.outputData);
							} else if (field.name === 'Модель') {
								cy.get('[formcontrolname="makeId"]')
									.inputAutocomplete('Au', 'Audi')
									.then(() => {
										if (field.formcontrolname && field.inputData && field.outputData) {
											cy.get(field.formcontrolname).inputAutocomplete(
												field.inputData,
												field.outputData
											);
										}
									});
							}
						}
						break;
					case 'dropdown':
						{
							if (field.formcontrolname && field.inputData) {
								cy.get(field.formcontrolname)
									.find('.b-select')
									.click();
							}
						}
						break;
					case 'input': {
						if (field.formcontrolname && field.inputData) {
							cy.get(field.formcontrolname)
								.type(field.inputData)
								.blur();
						}
					}
				}
			})
			.get(this.creditCalculator.container)
			.find(this.creditCalculator.submit)
			.click();
	}
}
