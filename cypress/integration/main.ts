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
        cy.reload()
            .visit(urls.mainPage.main)
            .server()
            .route('https://test.automama.ru/api/v2/auctions/search?tags=*').as('getSearchTag')
    })
    it('тултипы у контролов', () => {
        cy.isTooltipsOpenAfterMousmoove(mainPage.controls.question)
    })
    it('тултипы УТП', () => {
        cy.isTooltipsOpenAfterMousmoove(mainPage.utpsText)
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
