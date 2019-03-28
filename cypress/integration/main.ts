import { MainPage } from '../pages/main/main.page'
import { FilterObject } from '../shared/filter/filter.object'
import { FilterSpec } from '../shared/filter/filter.spec'
import { ReviewGallerySpec } from '../shared/gallery/review-gallery/review-gallery.spec'
import { PaginationSpec } from '../shared/pagination/pagination.spec'
import { urls } from '../support/urls'

const filterObject = new FilterObject()
const filterSpec = new FilterSpec()
const mainPage = new MainPage()
const paginationSpec = new PaginationSpec()
const reviewGallerySpec = new ReviewGallerySpec()

describe('Главная', () => {
    beforeEach(() => {
        cy.server()
            .route('https://test.automama.ru/api/v2/auctions/search?tags=*').as('getSearchTag')
            .visit(urls.mainPage.main)
    })
    it('тултипы УТП', () => {
        cy.isTooltipsOpenAfterMousmoove(mainPage.utpsText)
    })
    it('переход в статьи', () => {
        cy.get(mainPage.news.link).click().url().should('contains', '/blog')
    })
    it('открытие блока инфо подробнее', () => {
        cy.blockIsOpenAfterClick(mainPage.seoText.showMore, mainPage.seoText.link)
    })
    it('переход по якорной ссылке в каталог', () => {
        cy.get(mainPage.seoText.showMore).click()
            .get(mainPage.seoText.link).click().url().should('contains', '/cars')
    })
    it('при наведении на карточку появилась инфо', () => {
        cy.get(filterObject.carItem.auctionItems).first().trigger('mouseenter')
            .get(mainPage.carItems.info).should('be.visible')
    })
    it('переход в detail-car по клику на auction-item', () => {
        cy.get(filterObject.carItem.auctionItems).first().click()
            .url().should('contains', '/car/')
    })
    // filterSpec.isFilterWorking()
    paginationSpec.isPaginationWorking(
        mainPage.pagination.container,
        mainPage.pagination.results,
        filterObject.carItem.auctionItems)
    reviewGallerySpec.isReviewGalleryWorking(mainPage.reviewGalleryContainer)
})
