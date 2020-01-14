import { IExpressFilterField } from './express-filter-fields';

export class ExpressFilterObject {
	public carItem = {
		auctionItemsResult: '.am-cars-results__auctions auction-item',
		auctionitem: 'auction-item',
		itemCard: '.b-card',
	};
	public result = 'express-results';
	public itemDescription = {
		city: '.b-card-description__city',
		info: '.b-card__info',
		title: '.b-card-description__title',
		year: '.b-card-description__year',
	};

	public activateField(field: IExpressFilterField) {
		cy.then(() => {
			switch (field.fieldType) {
				case 'dropdown':
					{
						if (field.formcontrolname && field.inputData) {
							cy.get(field.formcontrolname).selectDropdown(field.inputData);
						}
					}
					break;
				case 'inputDropdown':
					{
						if (
							field.name !== 'Все модели' &&
							field.formcontrolname &&
							field.inputData &&
							field.outputData
						) {
							cy.get(field.formcontrolname)
								.inputDropdown(field.inputData, field.outputData)
								.wait('@getFilterSearch')
								.wait('@getSearch');
						} else if (field.name === 'Все модели') {
							cy.get('[formcontrolname="make"]')
								.inputDropdown('Au', 'Audi')
								.wait('@getFilterSearch')
								.wait('@getSearch')
								.wait(1000)
								.then(() => {
									if (field.formcontrolname && field.inputData && field.outputData) {
										cy.get(field.formcontrolname).inputDropdown(field.inputData, field.outputData);
									}
								});
						}
					}
					break;
				default: {
					throw new Error(`Не найден тип  ${field.fieldType}`);
				}
			}
		})
			.wait('@getSearch')
			.wait(1000);
	}
	public checkItem(value: string) {
		cy.get(this.carItem.auctionItemsResult).each(car => {
			cy.wrap(car)
				.find(this.itemDescription.title)
				.should('contain', value);
		});
	}
}
