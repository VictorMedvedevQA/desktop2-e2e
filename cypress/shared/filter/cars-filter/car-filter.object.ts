// tslint:disable
import { urls } from '../../../support/urls';
import { ICarsFilterField } from './cars-filter-fields';

export class CarFilterObject {
	public filter = {
		cleanAll: 'amc-row-col:contains(Сбросить)',
		showAll: 'amc-row-col:contains(Все параметры)',
	};
	public carItem = {
		auctionItemsResult: '.am-cars-results__auctions am-auction-item-wrapper',
		auctionitem: 'auction-item',
		itemCard: '.b-card',
	};
	public itemDescription = {
		city: '.b-card-description__city',
		info: '.b-card__info',
		title: '.b-card-description__title',
		year: '.b-card-description__year',
	};
	public controls = {
		active: '.am-tag-control_active',
		activeWarranty: '.amd-warranty-control_active',
		question: 'am-tags-control [name="question"]',
		tags: 'am-tags-control',
	};
	public checkingTagsControl(control: ICarsFilterField) {
		cy.get(control.name === 'Гарантия'? this.controls.activeWarranty : this.controls.active)
			.should('be.visible')
			.get(this.carItem.auctionItemsResult)
			.each(item => {
				if (control.iconSelector) {
					cy.wrap(item)
						.find(control.iconSelector)
						.should('be.visible');
				}
			});
	}

	public activateField(field: ICarsFilterField) {
		cy.url()
			.then(url => {
				if (url !== urls.express.main) {
					cy.get(this.filter.showAll).click();
				}
			})
			.then(() => {
				switch (field.fieldType) {
					case 'control':
						{
							cy.get(this.controls.tags)
								.contains(field.name)
								.click();
						}
						break;
					case 'dropdown':
						{
							if (field.formcontrolname && field.inputData) {
								cy.get(field.formcontrolname).selectDropdown(field.inputData);
							}
						}
						break;
					case 'dropdownCheckbox':
					{
						if (field.formcontrolname && field.inputData) {
							cy.get(field.formcontrolname).dropdownCheckbox(field.inputData);
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
					case 'inputDropdown':
						{
							if (
								field.name !== 'Все модели' &&
								field.formcontrolname &&
								field.inputData &&
								field.outputData
							) {
								cy.get(field.formcontrolname).inputDropdown(field.inputData, field.outputData);
							} else if (field.name === 'Все модели') {
								cy.get('[formcontrolname="make"]')
									.inputDropdown('Au', 'Audi')
									.wait('@getFilterSearch')
									.wait('@getSearch')
									// ".wait(2000)"  убрать когда исправят лишние запросы при фильтрации по модели на главном и в аукционах
									.wait(2000)
									.then(() => {
										if (field.formcontrolname && field.inputData && field.outputData) {
											cy.get(field.formcontrolname).inputDropdown(
												field.inputData,
												field.outputData
											);
										}
									});
							}
						}
						break;
				}
			})
			.wait('@getSearch');
	}
	public checkItem(value: string) {
		cy.get(this.carItem.auctionItemsResult).each(car => {
			cy.wrap(car)
				.find(this.itemDescription.title)
				.should('contain', value);
		});
	}
}
