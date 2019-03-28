
import { FilterObject } from './filter.object'

const filterObject = new FilterObject()
export class FilterSpec {
    public isFilterWorking() {
        describe('Фильтр', () => {
            filterObject.controlItems.forEach((checkedControl) => {
                describe('проверки контролов', () => {

                    // it('проверяем наличие иконок', () => {
                    //     filterObject.checkingIconsControl(checkedControl)
                    // })
                    it('тултипы у контролов', () => {
                        cy.isTooltipsOpenAfterMousmoove(filterObject.controls.question)
                    })
                })
            })

            describe('для каждого поля фильтра', () => {
                // it('проверяем смену урла ', () => {
                //     mainPage.checkingUrl(checkedControl)
                // })
            })
        })
    }

}
