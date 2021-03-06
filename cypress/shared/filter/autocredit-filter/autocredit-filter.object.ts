import { IAutocreditFilterField } from './autocredit-filter-fields';
import { filterFieldType } from '../filter-fields.object';

export class AutocreditFilterObject {
	public creditCalculator = {
		container: '.b-credit-calculator',
		submit: '[type="submit"]',
	};

	public creditCard = {
		creditCard: 'am-credit-card',
		results: '.b-credit-summary',
		auctionDetail: {
			auctionDetail: 'am-auction-details',
			auctionDetailInfo: 'am-auction-details-info',
			title: '.b-card-horizontal__h3',
			makeModel: '.b-text_strong-bold',
		},
	};

	public activateField(field: IAutocreditFilterField) {
		cy.then(() => {
			switch (field.fieldType) {
				case 'inputAutocomplete':
					{
						if (field.name !== 'Модель' && field.formcontrolname && field.inputData && field.outputData) {
							cy.get(field.formcontrolname).inputAutocomplete(field.inputData, field.outputData);
						} else if (field.name === 'Модель') {
							cy.get('[formcontrolname="makeId"]')
								.inputAutocomplete('Hyu', 'Hyundai')
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
				case 'input':
					{
						if (field.formcontrolname && field.inputData) {
							cy.get(field.formcontrolname)
								.type(field.inputData)
								.blur();
						}
					}
					break;
				case 'tab':
					break;
				default: {
					throw new Error(`Не найден тип  ${field.fieldType}`);
				}
			}
		})
			.get(this.creditCalculator.container)
			.find(this.creditCalculator.submit)
			.click()
			.wait(1500)
			.then(() => {
				if (field.fieldType === filterFieldType.tab) {
					if (field.inputData) {
						cy.get('am-tabs-switcher')
							.contains(field.inputData)
							.click()
							.wait(1000);
					}
				}
			});
	}
}
