import { AutocreditFilterObject } from './autocredit-filter.object';
import { IAutocreditFilterField } from './autocredit-filter-fields';
const autocreditFilterObject = new AutocreditFilterObject();

export class AutocreditFieldsSpec {
	public checkAutocreditField(field: IAutocreditFilterField) {
		describe('Поведение страницы после применения ' + field.name, () => {
			describe(field.name, () => {
				beforeEach(() => {
					autocreditFilterObject.activateField(field);
				});
				if (field.isUrlChange) {
					it('Проверяем смену урла ' + field.name, () => {
						cy.url().should('contains', field.tags);
					});
				}
				if (field.isSearchResultCheckable && field.outputData) {
					it('Проверяем  в результатах поиска ' + field.name, () => {
						cy.get(autocreditFilterObject.creditCard.results)
							.find(autocreditFilterObject.creditCard.auctionDetail.title)
							.each(card => {
								if (field.outputData) {
									expect(card.text()).contain(field.outputData);
								}
							});
					});
				}
			});
			if (field.shoudBeDisable) {
				it('задизейблен ' + field.name, () => {
					if (field.formcontrolname) {
						cy.get(field.formcontrolname).should('not.be.enabled');
					}
				});
			}
		});
	}
}
