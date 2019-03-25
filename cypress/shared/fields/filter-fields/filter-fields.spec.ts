import { IFilterField } from './filter-fields.object'

export class FilterFieldsSpec {
    public checkPageChanges(item: IFilterField) {
        describe('Изменения на странице после применения параметра фильтрации', () => {
            it('меняется урл', () => {
                cy.get('fd')
            })
            it('появилась "сбросить"', () => {
                cy.get('fd')
            })
            it('меняется хлебная крошка', () => {
                cy.get('fd')
            })
            it('изменился сео- текст', () => {
                cy.get('fd')
            })
            it('изменилось название нижнего блока', () => {
                cy.get('fd')
            })
            it('изменился выбор в нижнем блоке', () => {
                cy.get('fd')
                    .click()
            })
        })
    }

}
