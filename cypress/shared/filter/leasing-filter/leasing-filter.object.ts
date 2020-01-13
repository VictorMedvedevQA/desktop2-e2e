import { ILeasingFilterField } from './leasing-filter-fields';
import { filterFieldType } from '../filter-fields.object';

export class LeasingFilterObject {
	public creditCalculator = {
		container: '.b-credit-calculator',
		submit: '[type="submit"]',
	};

	public creditCard = {
		creditCard: 'am-credit-card',
		results: 'leasing-offers',
		auctionDetail: {
			auctionDetail: 'am-auction-details',
			auctionDetailInfo: 'am-auction-details-info',
			title: '.b-card-horizontal__h3',
			makeModel: '.b-text_strong-bold',
		},
	};

	public activateField(field: ILeasingFilterField) {
		cy.get(this.creditCalculator.container)
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
