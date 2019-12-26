import { ILeasingFilterField } from './leasing-filter-fields';
import { LeasingFilterObject } from './leasing-filter.object';
const leasingFilterObject = new LeasingFilterObject();
export class LeasingFieldsSpec {
	public checkLeasingField(field: ILeasingFilterField) {
		describe('Поведение странцы после применения ' + field.name, () => {
			describe(field.name, () => {
				beforeEach(() => {
					leasingFilterObject.activateField(field);
				});
				if (field.isUrlChange) {
					it('Проверяем смену урла ' + field.name, () => {
						cy.url().should('contains', field.tags);
					});
				}
				if (field.isSearchResultCheckable && field.outputData) {
					it('Проверяем  в результатах поиска ' + field.name, () => {
						cy.get(leasingFilterObject.creditCard.results)
							.find(leasingFilterObject.creditCard.auctionDetail.title)
							.each(card => {
								if (field.outputData) {
									expect(card.text()).contain(field.outputData);
								}
							});
					});
				}
			});
		});
	}
}
