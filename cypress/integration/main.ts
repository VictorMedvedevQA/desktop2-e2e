import { MainPage } from '../pages/main/main.page'
// import { controlItems } from '../shared/fields/filter-fields/filter-fields.object'
import { ReviewGallerySpec } from '../shared/gallery/review-gallery/review-gallery.spec'
import { PaginationObject } from '../shared/pagination/pagination.object'
import { PaginationSpec } from '../shared/pagination/pagination.spec'
import { urls } from '../support/urls'

const mainPage = new MainPage()
const paginationObject = new PaginationObject()
const paginationSpec = new PaginationSpec()
const reviewGallerySpec = new ReviewGallerySpec()

describe('Главная', () => {
    beforeEach(() => {
        cy.server()
            .route('https://test.automama.ru/api/v2/auctions/search?tags=*').as('getSearchTag')
            // .route(' https://tracker.comagic.ru').as('qwe')
            // .reload()

            .visit(urls.mainPage.main)
        // .wait('@qwe')

    })
    it('тултипы у контролов', () => {
        cy.isTooltipsOpenAfterMousmoove(mainPage.controls.question)
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
    // controlItems.forEach((checkedControl) => {
    //     describe('переход по контролам', () => {
    //         it('проверяем смену урла ', () => {
    //             mainPage.checkingUrl(checkedControl)
    //         })
    //         it('проверяем наличие иконок', () => {
    //             mainPage.checkingIconsControl(checkedControl)
    //         })
    //     })
    // })
    paginationSpec.isPaginationWorking(
        mainPage.pagination.container,
        mainPage.pagination.results,
        mainPage.carItems.auctionItems)
    reviewGallerySpec.isReviewGalleryWorking(mainPage.reviewGalleryContainer)

})
