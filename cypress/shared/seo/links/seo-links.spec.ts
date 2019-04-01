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
            seoLinksObject.seoLinks.forEach((el) => {
                describe('при переходе на ' + el.name, () => {
                    beforeEach(() => {
                        cy.server()
                            .route('https://test.automama.ru/api/v2/filter/models?makeId=**').as('getFilterMake')
                            .route('https://test.automama.ru/api/v2/filter/generations?modelId=**').as('getFilterModel')
                            .route('https://test.automama.ru/api/v2/auctions/search?p1=audi&p2=a1&generation=6187')
                            .as('getFilterGeneration')
                            .visit(el.urlToStart)
                            .get(seoLinksObject.linksList)
                            .find(seoLinksObject.linksItems).contains(el.value).click().then(() => {
                                switch (el.name) {
                                    case 'make':
                                        cy.wait('@getFilterMake')
                                        break
                                    case 'model':
                                        cy.wait('@getFilterModel')
                                        break
                                    case 'generation':
                                        cy.wait('@getFilterGeneration')
                                        break
                                }

                            })
                    })
                    it('изменились ссылки в нижнем блоке ', () => {
                        cy.get(seoLinksObject.linksList)
                            .find(seoLinksObject.linksItems).contains(el.nextStageValue)
                            .should('be.visible')
                    })
                    it('изменились хк ', () => {
                        cy.get(breadcrumbsObject.container).find(breadcrumbsObject.items.last)
                            .contains(el.value)
                            .should('be.visible')
                    })
                    it('изменился урл ', () => {
                        cy.url().should('contains', el.tags)
                    })
                    if (el.name !== 'generation') {
                        it('смена auctionItems', () => {
                            filterObject.checkItem(el.name, el.value)
                        })
                    }
                })
            })
        })
    }
}
