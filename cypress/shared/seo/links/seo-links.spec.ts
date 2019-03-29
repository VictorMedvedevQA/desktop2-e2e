import { urls } from '../../../support/urls'
import { BreadcrumbsObject } from '../../breadcrumbs/breadcrumbs.object'
import { FilterObject } from '../../filter/filter.object'
import { SeoLinksObject } from './seo-links.object'

const breadcrumbsObject = new BreadcrumbsObject()
const filterObject = new FilterObject()
const seoLinksObject = new SeoLinksObject()
export class SeoLinksSpec {
    public isSeoLinksWorking() {
        describe('работа нижнего блока', () => {

            it('на /cars отображаются только авто в наличии ', () => {
                cy.visit(urls.catalog.main)
                    .get(seoLinksObject.linksList)
                    .find(seoLinksObject.linksItems).contains('Audi')
                    .should('be.visible')
                    .get(seoLinksObject.linksItems).contains('ЗАЗ')
                    .should('not.be.visible')

            })

            describe('переход на марку ', () => {
                beforeEach(() => {
                    cy.server()
                        .route(' https://test.automama.ru/api/v2/filter/models?makeId=*').as('getSearch')
                        .visit(urls.catalog.main)
                        .get(seoLinksObject.linksList)
                        .find(seoLinksObject.linksItems).contains('Audi').click()
                        .wait('@getSearch')
                })
                it('переход на марку - изменились рез-ты  auction item ', () => {
                    filterObject.checkItem('make', 'Audi')
                })
                it('переход на марку - изменились рез-ты   listseolinksitems ', () => {
                    cy.get(seoLinksObject.linksList)
                        .find(seoLinksObject.linksItems).contains('A1')
                        .should('be.visible')
                })
                it('переход на марку - изменились хк ', () => {
                    cy.get(breadcrumbsObject.container).find(breadcrumbsObject.items.last)
                        .contains('Audi')
                        .should('be.visible')
                })
                it('переход на марку - изменился урл ', () => {
                    cy.url().should('contains', 'audi')
                })
            })
            // describe('переход на ', () => {
            //     it('переход на модель   - изменились рез-ты  auction item ', () => {

            //     })
            //     it('переход на марку - изменились рез-ты   listseolinksitems ', () => {

            //     })
            //     it('переход на марку - изменились хк ', () => {

            //     })
            //     it('переход на марку - изменился урл ', () => {

            //     })
            // })
            // describe('переход на ', () => {
            //     it('переход на поколение   - изменились рез-ты  auction item ', () => {

            //     })
            //     it('переход на марку - изменились рез-ты   listseolinksitems ', () => {

            //     })
            //     it('переход на марку - изменились хк ', () => {

            //     })
            //     it('переход на марку - изменился урл ', () => {

            //     })
            // })
        })
    }
}
