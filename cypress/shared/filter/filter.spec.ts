
import { BreadcrumbsObject } from '../breadcrumbs/breadcrumbs.object'
import { FilterObject } from './filter.object'
const breadcrumbsObject = new BreadcrumbsObject()
const filterObject = new FilterObject()
export class FilterSpec {
    public isFilterWorking() {
        filterObject.filterFields.forEach((field) => {
            describe(field.name, () => {
                beforeEach(() => {
                    filterObject.activateField(field)
                })
                it('проверяем смену урла ' + field.name, () => {
                    cy.url().should('contains', field.tags)
                })
                it('появление "сбросить" ', () => {
                    cy.get(filterObject.filter.cleanAll).should('be.visible')
                })
            })
        })
        filterObject.filterFields.forEach((field) => {
            if (field.fieldType === 'control') {
                describe('проверки контролов', () => {
                    it('проверяем наличие иконок ' + field.name, () => {
                        cy.then(() => {
                            filterObject.activateField(field)
                        }).then(() => {
                            filterObject.checkingIconsControl(field)
                        })
                    })
                    // it('тултипы у контролов', () => {
                    //     cy.isTooltipsOpenAfterMousmoove(filterObject.controls.question)
                    // })
                    //         it('тултип становится активным после клика', () => {
                    //         })

                })
            }
            if (field.hide === true) {
                it('развернуть и скрыть ' + field.name, () => {
                    if (field.formcontrolname !== undefined) {
                        cy.get(field.formcontrolname).find('.amc-select').should('not.be.visible')
                            .get(filterObject.filter.showAll).click()
                            .get(field.formcontrolname).find('.amc-select').should('be.visible')
                    }
                })
            }
            if (field.breadcrumbsChange === true) {
                it('меняются хк ' + field.name, () => {
                    cy.then(() => {
                        filterObject.activateField(field)
                    }).then(() => {
                        if (field.inputData !== undefined) {
                            cy.get(breadcrumbsObject.container).find(breadcrumbsObject.items.last)
                                .contains(field.inputData)
                                .should('be.visible')
                        }
                    })
                })
            }
        })
        //     it('меняется сео текст" ', () => {

        //     })
    }

}
