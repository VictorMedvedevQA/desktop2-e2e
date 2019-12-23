import { ExpressFilterObject } from './express-filter.object';
import { IExpressFilterField } from './express-filter-fields';
const filterObject = new ExpressFilterObject();
export class ExpressFieldsSpec {
	public checkExpressField(field: IExpressFilterField) {
		describe('Поведение контролов и странцы после применения ' + field.name, () => {
			describe(field.name, () => {
				beforeEach(() => {
					filterObject.activateField(field);
				});

				it('Проверяем смену урла ' + field.name, () => {
					cy.url().should('contains', field.tags);
				});
				if (field.isSearchResultCheckable && field.outputData) {
					it('Проверяем  в результатах поиска ' + field.name, () => {
						cy.get(filterObject.result)
							.find(filterObject.carItem.itemCard)
							.each(card => {
								switch (field.name) {
									case 'Все марки':
									case 'Все модели':
										{
											if (field.outputData) {
												expect(card.text()).contain(field.outputData);
											}
										}
										break;
									case 'Год от':
										{
											cy.wrap(card)
												.find(filterObject.itemDescription.year)
												.then(year => {
													const numberYear = year.text();
													if (field.outputData) {
														expect(
															+numberYear.substring(0, numberYear.length - 2)
														).not.be.lessThan(+field.outputData);
													}
												});
										}

										break;
									case 'до':
										{
											cy.wrap(card)
												.find(filterObject.itemDescription.year)
												.then(year => {
													const numberYear = year.text();
													if (field.outputData) {
														expect(
															+numberYear.substring(0, numberYear.length - 2)
														).not.be.greaterThan(+field.outputData);
													}
												});
										}

										break;
									default: {
										throw new Error(`Не найдено проверок для поля  ${field.name}`);
									}
								}
							});
					});
				}
			});
		});
	}
}
