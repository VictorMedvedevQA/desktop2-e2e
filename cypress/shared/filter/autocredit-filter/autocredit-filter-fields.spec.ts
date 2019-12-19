import { AutocreditFilterObject } from './autocredit-filter.object';
import { IAutocreditFilterField } from './autocredit-filter-fields';
const autocreditFilterObject = new AutocreditFilterObject();
export class AutocreditFieldsSpec {
	public checkAutocreditField(field: IAutocreditFilterField) {
		describe('Поведение странцы после применения ' + field.name, () => {
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
					// it('Проверяем  в результатах поиска ' + field.name, () => {
					// 	cy.get(autocreditFilterObject.creditCard.auctionDetail.title).each(card => {
					// 		cy.wrap(card).should('contain.text', field.outputData);
					// 	});
					// });
				}
			});
		});
	}
}
