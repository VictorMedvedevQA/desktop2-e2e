import { BreadcrumbsObject } from '../breadcrumbs/breadcrumbs.object'
import { FilterFieldsObject, IField } from './filter-fields.object'
import { FilterObject } from './filter.object'
const filterObject = new FilterObject()
const filterFieldsObject = new FilterFieldsObject()
const breadcrumbsObject = new BreadcrumbsObject()
export class FilterFieldsSpec {
  public checkField(field: IField) {
    describe(
      'Поведение контролов и странцы после применения ' + field.name,
      () => {
        describe(field.name, () => {
          beforeEach(() => {
            filterObject.getSearch()
            filterObject.activateField(field)
          })
          it('проверяем смену урла ' + field.name, () => {
            cy.url().should('contains', field.tags)
          })
          if (field.activateClearButton === true) {
            it('появление "сбросить" ', () => {
              cy.get(filterObject.filter.cleanAll).should('be.visible')
            })
          }
        })
        if (field.fieldType === 'control') {
          describe('проверки контролов', () => {
            it('проверяем наличие иконок в результатах' + field.name, () => {
              cy.then(() => {
                filterObject.activateField(field)
              }).then(() => {
                filterObject.checkingIconsControl(field)
              })
            })
            it('тултипы у контролов', () => {
              if (field.formcontrolname !== undefined) {
                cy.isTooltipsOpenAfterMousmoove(field.formcontrolname)
              }
            })
            it('контрол становится активным после клика', () => {
              cy.then(() => {
                filterObject.activateField(field)
              })
                .get(filterObject.controls.active)
                .should('be.visible')
            })
          })
        }
        if (field.hide === true) {
          it('развернуть и скрыть ' + field.name, () => {
            if (field.formcontrolname !== undefined) {
              cy.get(field.formcontrolname)
                .find('.amc-select')
                .should('not.be.visible')
                .get(filterObject.filter.showAll)
                .click()
                .get(field.formcontrolname)
                .find('.amc-select')
                .should('be.visible')
            }
          })
        }
        if (field.breadcrumbsChange === true) {
          it('меняются хк ' + field.name, () => {
            cy.then(() => {
              filterObject.activateField(field)
            }).then(() => {
              if (field.inputData !== undefined) {
                cy.get(breadcrumbsObject.container)
                  .find(breadcrumbsObject.items.last)
                  .contains(field.inputData)
                  .should('be.visible')
              }
            })
          })
        }
      },
    )
  }
}
