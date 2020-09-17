import { BreadcrumbsObject } from '../../breadcrumbs/breadcrumbs.object';
import { CarFilterObject } from './car-filter.object';
import { ICarsFilterField } from './cars-filter-fields';
const filterObject = new CarFilterObject();
const breadcrumbsObject = new BreadcrumbsObject();
export class CarsFieldsSpec {
	public checkCatalogField(field: ICarsFilterField) {
		describe('Поведение контролов и страницы после применения ' + field.name, () => {
			describe(field.name, () => {
				beforeEach(() => {
					filterObject.activateField(field);
				});

				it('Проверяем смену урла ' + field.name, () => {
					cy.url().should('contains', field.tags);
				});

				if (field.activateClearButton) {
					it('Появление "сбросить" ', () => {
						cy.get(filterObject.filter.cleanAll).should('be.visible');
					});
				}
			});

			if (field.fieldType === 'control') {
				describe('Проверки контролов', () => {
					it('Проверяем наличие иконок в результатах ' + field.name, () => {
						cy.then(() => {
							filterObject.activateField(field);
						}).then(() => {
							filterObject.checkingTagsControl(field);
						});
					});

					it('Тултипы у контролов', () => {
						if (field.formcontrolname) {
							cy.isTooltipsOpenAfterMousmove(field.formcontrolname);
						}
					});

					it('Контрол становится активным после клика', () => {
						cy.then(() => {
							filterObject.activateField(field);
						})
							.get(field.name === 'Гарантия'? filterObject.controls.activeWarranty : filterObject.controls.active)
							.should('be.visible');
					});
				});
			}

			if (field.isHidden) {
				it('Развернуть и скрыть ' + field.name, () => {
					if (field.formcontrolname) {
						cy.get(field.formcontrolname)
							.parent()
							.should('not.be.visible')
							.get(filterObject.filter.showAll)
							.click()
							.get(field.formcontrolname)
							.parent()
							.should('be.visible');
					}
				});
			}

			if (field.breadcrumbsChange) {
				it('Меняются ХК ' + field.name, () => {
					cy.then(() => {
						filterObject.activateField(field);
					}).then(() => {
						if (field.inputData) {
							cy.get(breadcrumbsObject.container)
								.find(breadcrumbsObject.items.last)
								.contains(field.inputData)
								.should('be.visible');
						}
					});
				});
			}
		});
	}
}
